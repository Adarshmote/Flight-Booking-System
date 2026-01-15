import { Injectable } from '@angular/core';
import { WeatherServiceService } from './shared/weather-widget/weather-service.service';
import { userChoice } from './userChoice';

@Injectable({
  providedIn: 'root'
})
export class FlyInfoService {
  info = [];
  constructor(public weatherService: WeatherServiceService) { }

  addInfo(information:userChoice){
    this.info.push(information);
  }

  getInfo(){
    return this.info;
  }

  clearInfo(){
    this.info = [];
    return this.info;
  }
}
