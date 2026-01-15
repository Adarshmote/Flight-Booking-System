import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FlyInfoService } from 'src/app/fly-info.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Page2Service } from 'src/app/page2/page2.service';
import { ShowFlightComponent } from 'src/app/shared/show-flight/show-flight.component';
import { ShowFlightService } from 'src/app/shared/show-flight/show-flight.service';
import { WeatherServiceService } from 'src/app/shared/weather-widget/weather-service.service';
import { WeatherWidgetComponent } from 'src/app/shared/weather-widget/weather-widget.component';
import { userChoice } from '../../userChoice';
import { CustomvalidationService } from '../services/customvalidation.service';
import { ScannerService } from './scanner.service';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  flyInfo:string[] = this.info.getInfo();
  fromCities:string[] = ['Katowice', 'Cracow', 'Warsaw'];
  toCities:string[] = ['Berlin', 'Barcelona', 'New York'];
  minDate:string = new Date().toISOString().slice(0, 10);
  model:userChoice = new userChoice('', '', null, null);
  submitted:boolean = false;
 

  constructor(public info: FlyInfoService, public custom: CustomvalidationService, public auth: AuthService, private router: Router, public localStorage:LocalStorageService, public weatherService:WeatherServiceService, public weatherWidget: WeatherWidgetComponent, public showFlight:ShowFlightService, public showFlightComp:ShowFlightComponent, private scanerService: ScannerService, private page2Service:Page2Service) {

  }

  ngOnInit(){
    
  }

  onSubmit() {
    if (this.auth.getInfoAccess() === true) {
        this.submitted = true;
        this.info.clearInfo();
        this.page2Service.clearInfo();
        this.info.addInfo(this.model);
        this.scanerService.addUserChoice(this.model);
        this.showFlight.showFlight();
        this.showFlight.setTime();
        this.weatherService.updateData(this.model.from);
        this.weatherWidget.fetchWeather();
       this.showFlightComp.getEndHour();
        document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }else{
      this.router.navigate(['/login']);
    }

  }

}
