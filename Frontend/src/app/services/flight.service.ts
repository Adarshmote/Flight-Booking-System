import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { API_BASE_URL } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private http = inject(HttpClient);
  private api = `${API_BASE_URL}/flights`;
  private bookingApi = `${API_BASE_URL}/bookings`;

  /* =====================================================
     🔑 AUTH HEADER (used for protected routes)
     ===================================================== */
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  /* =====================================================
     ✈️ BOOKING FLOW DATA STORAGE (STEP DATA PASSING)
     Used between Search → Select Seats → Summary
     ===================================================== */

  private selectedFlightSource = new BehaviorSubject<any>(null);
  selectedFlight$ = this.selectedFlightSource.asObservable();

  private selectedSeatsSource = new BehaviorSubject<string[]>([]);
  selectedSeats$ = this.selectedSeatsSource.asObservable();

  setFlight(flight: any) {
    this.selectedFlightSource.next(flight);
  }

  setSeats(seats: string[]) {
    this.selectedSeatsSource.next(seats);
  }

  clearBookingData() {
    this.selectedFlightSource.next(null);
    this.selectedSeatsSource.next([]);
  }

  /* =========================
     USER (PUBLIC)
     ========================= */

  searchFlights(from: string, to: string, date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/search`, {
      params: { from, to, date }
    });
  }

  getFlightById(id: string): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  /* =========================
     USER BOOKING (STEP 1)
     ========================= */

  bookFlight(flightId: string): Observable<{ success: boolean; message: string; bookingId?: string }> {
    return this.http.post<{ success: boolean; message: string; bookingId?: string }>(
      `${this.api}/${flightId}/book`,
      {},
      { headers: this.getAuthHeaders() }
    );
  }

  /* =========================
     USER BOOKING (WITH SEATS)
     ========================= */

  bookSeats(flightId: string, seats: string[]): Observable<any> {
    return this.http.post(
      `${this.api}/${flightId}/book`,
      { seats },
      { headers: this.getAuthHeaders() }
    );
  }

  /* =========================
     ✅ FINAL CONFIRM BOOKING
     ========================= */

  confirmBooking(data: any): Observable<any> {
    return this.http.post(this.bookingApi, data, {
      headers: this.getAuthHeaders()
    });
  }

  /* =========================
     ADMIN (PROTECTED)
     ========================= */

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(this.api, {
      headers: this.getAuthHeaders()
    });
  }

  addFlight(data: any): Observable<any> {
    return this.http.post<any>(this.api, data, {
      headers: this.getAuthHeaders()
    });
  }

  updateFlight(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.api}/${id}`, data, {
      headers: this.getAuthHeaders()
    });
  }

  deleteFlight(id: string): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
