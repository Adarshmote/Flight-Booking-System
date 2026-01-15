import { Component, ElementRef, ViewChild } from '@angular/core';
import { FlyInfoService } from 'src/app/fly-info.service';
import { ShowFlightService } from 'src/app/shared/show-flight/show-flight.service';
import { Page2Service } from '../page2.service';
import { HttpClient } from '@angular/common/http';
import { WeatherServiceService } from 'src/app/shared/weather-widget/weather-service.service'
import { userChoice } from 'src/app/userChoice';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  @ViewChild('target') targetRef: ElementRef;

  show: boolean = false;
  info: userChoice[] = this.flyInfo.getInfo();
  sits: String[];
  ticketPrice: any;
  luggagePrice: any;
  sum: any;

  currencies: string[] = ['USD', 'EUR', 'PLN'];

  selectedCurrency: string = '';
  rate: any;
  amount: any;

  sitsAlert: string;
  luggageAlert: string;

  constructor(private flyInfo: FlyInfoService, public weatherService: WeatherServiceService, public page2Service: Page2Service, public showFlight: ShowFlightService, private http: HttpClient) { }

  showSummary() {

    if (this.info[0].people === this.page2Service.getLuggageCount().length && this.info[0].people === this.page2Service.getSits().length) {

      this.show = true;
      this.luggagePrice = this.page2Service.getLuggagePrice()
      this.sits = this.page2Service.getSits();
      this.ticketPrice = this.showFlight.getPrice();
      this.sum = this.ticketPrice + this.luggagePrice;

      this.weatherService.updateData(this.info[0].to);
      this.page2Service.clearLuggage();

      requestAnimationFrame(() => {
        this.targetRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });

      this.sitsAlert = '';
      this.luggageAlert = '';

    } else {
      this.showAlert();
    }
  }


  changeCurrency(event: any) {
    this.selectedCurrency = event.target.value;
    this.http.get<any>(`https://api.ratesapi.io/api/latest?base=PLN&symbols=${this.selectedCurrency}`).subscribe(data => {
      this.rate = data.rates[this.selectedCurrency];
      this.amount = (this.sum * this.rate).toFixed(2);
    })
  }

  showAlert() {
    if (this.info[0].people !== this.page2Service.getLuggageCount().length) {
      this.luggageAlert = 'Choose luggage for all people!';
    }

    if (this.info[0].people !== this.page2Service.getSits().length) {
      this.sitsAlert = 'Choose sits for all people!'
    }
  }

  backToHomePage(){
    this.weatherService.updateData(this.info[0].from);
  }
}
