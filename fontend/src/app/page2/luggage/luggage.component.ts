import { Component, OnInit } from '@angular/core';
import { FlyInfoService } from 'src/app/fly-info.service';
import { userChoice } from 'src/app/userChoice';
import { Page2Service } from '../page2.service';

@Component({
  selector: 'app-luggage',
  templateUrl: './luggage.component.html',
  styleUrls: ['./luggage.component.scss']
})
export class LuggageComponent implements OnInit {

  info: userChoice[] = this.flyInfo.getInfo();
  people = this.info[0].people;
  luggagePrice: number[] = [];

  constructor(private flyInfo: FlyInfoService, private page2Service: Page2Service) { }

  ngOnInit(): void {
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

  chooseLuggage(event) {
    const wrapper = document.querySelectorAll('.luggage__wrapper');
    let target = event.target.closest(".luggage__card");
    let id: Number = target.attributes['id'].nodeValue;
    let cards = document.querySelectorAll('.luggage__card');
    const priceAttr = target.attributes['price'].nodeValue;

    wrapper.forEach(wrap => {

      cards.forEach((card, index) => {
        if (card.id === target.id && card.classList.contains('clicked')) {
          card.classList.remove('clicked');
          const priceIndex = this.luggagePrice.indexOf(card.attributes['price'].nodeValue)
          this.luggagePrice.splice(priceIndex, 1);
          this.page2Service.spliceLuggageArr(priceIndex, 1);
        }
      })
    })

    target.classList.toggle('clicked');

    if (target.classList.contains('clicked')) {
      this.luggagePrice.push(priceAttr)
    }

    this.page2Service.addLuggagePrice(this.luggagePrice);
  }

}
