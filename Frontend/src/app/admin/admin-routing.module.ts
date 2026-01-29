import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { ManageFlightsComponent } from './manage-flights/manage-flights';
import { adminGuard } from '../guards/admin-guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'manage-flights',
    component: ManageFlightsComponent,
    canActivate: [adminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
