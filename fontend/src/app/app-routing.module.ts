import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page1/login/login.component';
import { Page1HomeComponent } from './page1/page1-home/page1-home.component';
import { SingupComponent } from './page1/singup/singup.component';
import { Page2HomeComponent } from './page2/page2-home/page2-home.component';

const routes: Routes = [
  {path: '', component: Page1HomeComponent},
  {path: 'page2', component: Page2HomeComponent},
  {path: 'signup', component: SingupComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
