import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherServiceService } from './weather-widget/weather-service.service';
import { ShowFlightComponent } from './show-flight/show-flight.component';
import { ShowFlightService } from './show-flight/show-flight.service';
import { ScannerService } from '../page1/scanner/scanner.service';
import { FlyInfoService } from 'src/app/fly-info.service';



@NgModule({
  declarations: [
    ButtonComponent,
    WeatherWidgetComponent,
    ShowFlightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, WeatherWidgetComponent, ShowFlightComponent],
  providers: [WeatherServiceService, ShowFlightService, ScannerService, FlyInfoService]
})
export class SharedModule { }
