import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  coordinates = {
    'Katowice': {lat: 50.26, lon: 19.03},
    'Cracow': {lat: 50.04, lon: 19.56},
    'Warsaw': {lat: 52.13, lon: 21.00},
    'Berlin': {lat: 52.31, lon: 13.25},
    'Barcelona': {lat: 41.24, lon: 2.10},
    'New York': {lat: 40.42, lon: 74.00},
  }

  localization;
  city:string 
  
  constructor(private http: HttpClient) { }

  userChoiceData:string[] = ['Katowice'];

  getCity(){
    this.city = this.userChoiceData[0];
    return this.city
  }
 
  updateData(data){
    this.clearData();
    this.userChoiceData.push(data)
  }

  clearData(){
    this.userChoiceData = [];
    return this.userChoiceData;
  }

  getWeatherData(){
    this.localization ={
      lat: this.coordinates[this.userChoiceData[0]].lat,
      lon: this.coordinates[this.userChoiceData[0]].lon
    }

   return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.localization.lat}&lon=${this.localization.lon}&units=metric&exclude=hourly&appid=c4d7b61fd5e60aa5df82a470297864d1`)

  }

  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/wn/' + icon + "@2x.png";
  }
}
