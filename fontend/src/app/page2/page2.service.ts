import { Injectable } from '@angular/core';
import { FlyInfoService } from '../fly-info.service';

@Injectable({
  providedIn: 'root'
})
export class Page2Service {

  constructor(private flyinfo: FlyInfoService) { }
  private luggagePrice: Number[] = [];
  sits: string[] = [];

  addLuggagePrice(price): void {
    this.luggagePrice.push(price);
  }

  getLuggagePrice(): Number[] {
    let price;
    price = this.luggagePrice;
    price = price[0].map(i => Number(i)).reduce(function (a, b) {
      return a + b;
    })
    this.luggagePrice = price;
    return this.luggagePrice;
  }

  addSits(sit): void {
    this.sits.push(sit);
  }

  getSits(): string[] {
    return this.sits;
  }

  clearInfo() {
    this.sits = [];
  }

  clearLuggage() {
    this.luggagePrice = [];
  }

  getLuggageCount(): Number[] {
    return this.luggagePrice;
  }

  spliceLuggageArr(index: number, number: number) {
    this.luggagePrice.splice(index, number);
  }

}