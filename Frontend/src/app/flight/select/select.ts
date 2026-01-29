import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { HeaderComponent } from '../../shared/header/header';

@Component({
  standalone: true,
  selector: 'app-select',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './select.html',
  styleUrls: ['./select.css']
})
export class SelectComponent implements OnInit {

  flight: any;
  seats: string[] = [];
  selectedSeats: string[] = [];

  constructor(private fs: FlightService, private router: Router) {}

  ngOnInit() {
    this.fs.selectedFlight$.subscribe(f => this.flight = f);

    // create dummy seat layout
    const rows = ['A','B','C','D'];
    for (let r of rows) {
      for (let i = 1; i <= 6; i++) {
        this.seats.push(r + i);
      }
    }
  }

  toggleSeat(seat: string) {
    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  continue() {
    if(this.selectedSeats.length === 0) return;
    this.fs.setSeats(this.selectedSeats);
    this.router.navigate(['/flights/summary']);
  }
}
