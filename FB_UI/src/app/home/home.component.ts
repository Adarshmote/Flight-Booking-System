import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  agree = false;

  constructor(private router: Router) {}

  onGotItClick() {
    this.agree = true;
    this.router.navigate(['/book']);
  }
}
