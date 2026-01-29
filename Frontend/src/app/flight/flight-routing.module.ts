import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Standalone components
import { SearchComponent } from './search/search';
import { SelectComponent } from './select/select';
import { SummaryComponent } from './summary/summary';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent, // default route: /flight
  },
  {
    path: 'select',
    component: SelectComponent // /flight/select
  },
  {
    path: 'summary',
    component: SummaryComponent // /flight/summary
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule {}
