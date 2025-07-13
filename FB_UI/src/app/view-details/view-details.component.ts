import { Component, OnInit } from '@angular/core';
import { BookFlightService } from '../book-flight/book-flight.service';
import { Bookings } from '../shared/Bookings'; // ✅ Use this model

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  bookings: Bookings[] = [];
  errorMessage: string = '';
  successMessage: string = ''; // ✅ Added to resolve the HTML error

  constructor(private bookFlightService: BookFlightService) {}

  ngOnInit(): void {
    this.bookFlightService.getAllBookings().subscribe({
      next: (data: Bookings[]) => {
        this.bookings = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load bookings';
      }
    });
  }
}
