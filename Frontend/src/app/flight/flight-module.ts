import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight-routing.module';

// Standalone components
import { SearchComponent } from './search/search';
import { SelectComponent } from './select/select';
import { SummaryComponent } from './summary/summary';

@NgModule({
  imports: [
    CommonModule,
    FlightRoutingModule,
    SearchComponent,
    SelectComponent,
    SummaryComponent
  ]
})
export class FlightModule {}
