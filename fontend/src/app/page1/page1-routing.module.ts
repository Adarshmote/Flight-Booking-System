import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { Page1HomeComponent } from './page1-home/page1-home.component';
import { Page2HomeComponent } from '../page2/page2-home/page2-home.component';


const routes: Routes = [
  {path: '', component: Page1HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  {path: 'page2', component: Page2HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1RoutingModule { }