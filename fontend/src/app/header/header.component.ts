import { Component, Injectable, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { CustomvalidationService } from '../page1/services/customvalidation.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import {BreakpointObserver} from '@angular/cdk/layout';
import { WeatherServiceService } from '../shared/weather-widget/weather-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
  ]
})

@Injectable({
  providedIn: 'root'
})

export class HeaderComponent implements OnInit {

  isMediumScreen:boolean = this.breakpointObserver.isMatched('(min-width: 599px)');

  open:boolean = false;

  constructor(public custom:CustomvalidationService, private router: Router, public authservice:AuthService, public breakpointObserver: BreakpointObserver, public weatherWidget: WeatherServiceService) { }

  ngOnInit(): void {
    this.listener();

    anime({
      targets: '.logo',
      scale: [2,1],
      delay: 500,
      duration: 2000,
      easing: 'easeInOutQuad'
    });
  }


 onLogOut(){
  this.authservice.logout();
  this.router.navigate(['/']);
  this.listener();
 }

 openNav(){
  this.open = true;
 }

 closeNav(){
   this.listener();
 }

 backToMain(){
   this.closeNav();
   this.weatherWidget.updateData('Katowice');

 }

 listener() {
  this.breakpointObserver.observe([
    '(min-width: 768px)'
      ]).subscribe(result => {
        if (result.matches) {
          this.open = true;
        } else {

          this.open = false;
        }
        })
}
}
