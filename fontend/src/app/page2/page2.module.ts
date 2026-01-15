import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherServiceService } from 'src/app/shared/weather-widget/weather-service.service'
import { Page2RoutingModule } from './page2-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { Page1Module } from '../page1/page1.module';
import { Page2HomeComponent } from './page2-home/page2-home.component';
import { LuggageComponent } from './luggage/luggage.component';
import { SharedModule } from '../shared/shared.module';
import { SitsComponent } from './sits/sits.component';
import { Page2Service } from './page2.service';
import { ShowFlightService } from '../shared/show-flight/show-flight.service';


@NgModule({
  declarations: [
    Page2HomeComponent,
    LuggageComponent,
    SitsComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    Page2RoutingModule,
    Page1Module,
    SharedModule
  ],
  providers: [Page2Service, ShowFlightService, WeatherServiceService],
  exports: [SitsComponent],
})
export class Page2Module { }
