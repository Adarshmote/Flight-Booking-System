import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard';
import { ManageFlightsComponent } from './manage-flights/manage-flights';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,

    // ✅ IMPORT standalone components here
    DashboardComponent,
    ManageFlightsComponent
  ]
})
export class AdminModule { }
