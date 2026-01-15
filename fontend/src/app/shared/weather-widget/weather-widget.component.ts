
import { Component, Injectable, OnInit } from '@angular/core';
import { FlyInfoService } from 'src/app/fly-info.service';
import { Weather } from 'src/app/weather';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class WeatherWidgetComponent implements OnInit {
  weather: Weather = new Weather();
  weatherInfo = [];

  constructor(private weatherService: WeatherServiceService, public flyInfo: FlyInfoService) { }

  city: string = this.getCity();
  data = this.fetchWeather();

  ngOnInit() {
    this.fetchWeather();
  }

  getCity() {
    return this.weatherService.getCity();
  }

  fetchWeather() {
    this.weatherService.getWeatherData().subscribe(response => {
      this.weatherInfo.pop();
      this.weather.tempetature = Math.round(response['current']['temp']);
      this.weather.icon = this.weatherService.getIconUrl(response['current']['weather'][0]['icon']);
      document.querySelector('.weather__temperature').textContent = `${this.weather.tempetature}`;
      this.getCity();
      this.weatherInfo.push(this.weather);
    })
  }

  getIcon() {

    return this.weatherInfo[0].icon;
  }
}
