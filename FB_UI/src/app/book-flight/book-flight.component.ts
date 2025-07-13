import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { BookFlightService } from './book-flight.service';
import { Flights } from '../shared/Flight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService]
})
export class BookFlightComponent implements OnInit {

  errorMessage: string = '';
  successMessage: string = '';
  flights: Flights[] = [];
  bookingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookFlightService: BookFlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      passengerName: ['', Validators.required],
      noOfTickets: ['', [Validators.required, Validators.min(1)]],
      flightId: ['', [Validators.required, this.validateFlight]]
    });

    // ✅ Add console log and error handling
    this.bookFlightService.getAllFlights().subscribe({
      next: (data: Flights[]) => {
        console.log("✅ Flights fetched successfully:", data); // helpful debug
        this.flights = data;
      },
      error: (err) => {
        console.error("❌ Error fetching flights:", err);
        this.errorMessage = err.message || "Unable to fetch flights";
      }
    });
  }

  // ✅ Custom validator for flight ID
  validateFlight(control: AbstractControl): ValidationErrors | null {
    const flightIdPattern = /^[A-Z]{3}-\d{3}$/;
    if (!control.value) return null;
    return flightIdPattern.test(control.value) ? null : { invalidFlightId: true };
  }

  book(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.bookingForm.invalid) {
      this.errorMessage = "Please fix the form errors before submitting.";
      return;
    }

    const formValues = this.bookingForm.value;
    const formFlightId = formValues.flightId.trim().toLowerCase();
    const selectedFlight = this.flights.find(f => f.flightId.toLowerCase() === formFlightId);

    if (!selectedFlight) {
      this.errorMessage = "Flight unavailable!!";
      return;
    }

    if (selectedFlight.status.toLowerCase() === 'cancelled') {
      this.errorMessage = "Flight cancelled!!";
      return;
    }

    if (formValues.noOfTickets > selectedFlight.availableSeats) {
      this.errorMessage = "Requested number of seats unavailable";
      return;
    }

    const fare = selectedFlight.ticketCost * formValues.noOfTickets;

    console.log("🚀 Attempting to book flight:", formValues);

    this.bookFlightService.bookFlight(this.bookingForm.value).subscribe({
      next: () => {
        this.successMessage = `Flight booked successfully! Total Fare: ₹${fare}`;
        console.log("✅ Booking successful. Updating available seats...");

        const updatedFlight: Flights = {
          ...selectedFlight,
          availableSeats: selectedFlight.availableSeats - formValues.noOfTickets
        };

        this.bookFlightService.updateFlight(selectedFlight.flightId, updatedFlight).subscribe({
          next: () => {
            console.log("✅ Available seats updated.");
          },
          error: (err) => {
            console.error("⚠️ Failed to update seats:", err);
            this.errorMessage = "Flight booked but failed to update seats.";
          }
        });

        this.bookingForm.reset();
        this.router.navigate(['/view-details']);
      },
      error: (err) => {
        console.error("❌ Booking error:", err);
        this.errorMessage = "Flight unavailable!!";
      }
    });
  }
}