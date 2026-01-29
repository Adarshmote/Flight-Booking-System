import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../shared/header/header';

@Component({
  standalone: true,
  selector: 'app-summary',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './summary.html',
  styleUrls: ['./summary.css']
})
export class SummaryComponent implements OnInit {

  flight: any = null;
  seats: string[] = [];
  total = 0;

  constructor(
    private fs: FlightService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fs.selectedFlight$.subscribe(f => {
      this.flight = f;
      this.calculate();
    });

    this.fs.selectedSeats$.subscribe(s => {
      this.seats = s || [];
      this.calculate();
    });
  }

  calculate() {
    if (this.flight && this.seats.length) {
      this.total = this.flight.price * this.seats.length;
    } else {
      this.total = 0;
    }
  }

  private getUserIdFromToken(): string {
    const token = localStorage.getItem('token');
    if (!token) return '';

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.id || payload._id || '';
    } catch {
      return '';
    }
  }

  confirm() {
    if (!this.flight || !this.seats.length) {
      alert('Missing flight or seats');
      return;
    }

    const booking = {
      userId: this.getUserIdFromToken(),
      flightId: this.flight._id,
      selectedSeats: this.seats,
      totalPrice: this.total
    };

    this.fs.confirmBooking(booking).subscribe({
      next: () => {
        alert('Booking Successful 🎉');
        this.router.navigate(['/flights']);
      },
      error: () => alert('Booking failed')
    });
  }
}
