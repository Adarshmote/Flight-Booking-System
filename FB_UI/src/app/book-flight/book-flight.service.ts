import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Flights } from '../shared/Flight';
import { Bookings } from '../shared/Bookings';

@Injectable({ providedIn: 'root' })
export class BookFlightService {
  private baseUrl = 'http://localhost:1020';

  constructor(private http: HttpClient) {}

  getAllFlights(): Observable<Flights[]> {
    return this.http.get<any[]>(`${this.baseUrl}/flights`).pipe(
      map(flights => flights.map(f => ({
        flightId: f.id,
        aircraftName: f.AircraftName,
        ticketCost: f.fare,
        availableSeats: f.availableSeats,
        status: f.status
      }))),
      catchError(err => {
        console.error('Error fetching flights:', err);
        return throwError(() => new Error('Unable to fetch flights'));
      })
    );
  }

getAllBookings(): Observable<Bookings[]> {
  return this.http.get<any[]>(`${this.baseUrl}/bookings`).pipe(
    map(bookings => bookings.map(b => ({
      bookingId: b.bookingId,
      passengerName: b.passengerName,
      flightId: b.flightId,
      noOfTickets: b.noOfTickets,
      amount: b.totalAmount
    })))
  );
}


  bookFlight(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/book`, data).pipe(
      catchError(err => {
        console.error('Error booking flight:', err);
        return throwError(() => new Error('Failed to book flight'));
      })
    );
  }

  updateFlight(flightId: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${flightId}`, data).pipe(
      catchError(err => {
        console.error('Error updating flight:', err);
        return throwError(() => new Error('Failed to update flight'));
      })
    );
  }

  deleteBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/bookings/${bookingId}`).pipe(
      catchError(err => {
        console.error('Error deleting booking:', err);
        return throwError(() => new Error('Failed to delete booking'));
      })
    );
  }
}
