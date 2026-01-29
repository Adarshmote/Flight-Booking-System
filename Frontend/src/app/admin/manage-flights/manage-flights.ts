import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../services/flight.service';
import { HeaderComponent } from '../../shared/header/header';

@Component({
  selector: 'app-manage-flights',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './manage-flights.html',
  styleUrls: ['./manage-flights.css']
})
export class ManageFlightsComponent implements OnInit {

  private fb = inject(FormBuilder);
  private flightService = inject(FlightService);

  flights: any[] = [];
  editingId: string | null = null;
  loading = false;

  flightForm: FormGroup = this.fb.group({
    airline: ['', Validators.required],
    from: ['', Validators.required],
    to: ['', Validators.required],
    departureTime: ['', Validators.required],
    arrivalTime: ['', Validators.required],
    price: [null, [Validators.required, Validators.min(1)]],
    seatsAvailable: [null, [Validators.required, Validators.min(1)]]
  });

  ngOnInit(): void {
    this.loadFlights();
  }

  addFlight() {
    console.log('Form submitted', this.flightForm.value); // fixed
    this.flightService.addFlight(this.flightForm.value).subscribe({
      next: res => {
        console.log('Flight added', res);
        this.afterSave();
      },
      error: err => {
        console.error('Error adding flight', err);
      }
    });
  }

  loadFlights() {
    this.flightService.getFlights().subscribe({
      next: res => this.flights = res,
      error: err => console.error(err)
    });
  }

  submit() {
    if (this.flightForm.invalid) return;

    this.loading = true;

    const action$ = this.editingId
      ? this.flightService.updateFlight(this.editingId, this.flightForm.value)
      : this.flightService.addFlight(this.flightForm.value);

    action$.subscribe({
      next: () => this.afterSave(),
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  edit(flight: any) {
    this.editingId = flight._id;
    this.flightForm.patchValue(flight);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  delete(id: string) {
    if (!confirm('Delete this flight?')) return;

    this.flightService.deleteFlight(id).subscribe({
      next: () => this.loadFlights(),
      error: err => console.error(err)
    });
  }

  afterSave() {
    this.flightForm.reset();
    this.editingId = null;
    this.loading = false;
    this.loadFlights();
  }
}
