import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ScannerComponent } from './scanner/scanner.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page1HomeComponent } from './page1-home/page1-home.component';
import { Page1RoutingModule } from './page1-routing.module';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherServiceService } from '../../app/shared/weather-widget/weather-service.service'
import { ShowFlightService } from '../shared/show-flight/show-flight.service';
import { ShowFlightComponent } from '../shared/show-flight/show-flight.component';
import { WeatherWidgetComponent } from '../shared/weather-widget/weather-widget.component';
import { ScannerService } from './scanner/scanner.service';
import { SitsComponent } from '../page2/sits/sits.component';
import { Page2Service } from '../page2/page2.service';


@NgModule({
  declarations: [HeroComponent, ScannerComponent, Page1HomeComponent, SingupComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    Page1RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherServiceService, ShowFlightService, ShowFlightComponent, WeatherWidgetComponent, ScannerService, SitsComponent, Page2Service],  
  exports: [LoginComponent, SingupComponent]
})
export class Page1Module { }
