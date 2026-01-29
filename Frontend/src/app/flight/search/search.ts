import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { HeaderComponent } from '../../shared/header/header';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [CommonModule, FormsModule,HeaderComponent],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {

  from = '';
  to = '';
  date = '';
  flights: any[] = [];
  loading = false;
  error = '';

  constructor(
    private flightService: FlightService,
    private router: Router
  ) {}

  search() {
    if (!this.from.trim() || !this.to.trim() || !this.date) {
      this.error = 'Please fill From, To and Date';
      return;
    }

    this.loading = true;
    this.error = '';

    // ✅ PASS DATE ALSO
    this.flightService.searchFlights(this.from.trim(), this.to.trim(), this.date)
      .subscribe({
        next: (res) => {
          this.flights = res;
          this.loading = false;

          if (!res.length) {
            this.error = 'No flights found';
          }
        },
        error: () => {
          this.error = 'Server error while searching flights';
          this.loading = false;
        }
      });
  }

  selectFlight(flight: any) {
   this.flightService.setFlight(flight);
   this.router.navigate(['/flights/select']); // correct path
  }
}
