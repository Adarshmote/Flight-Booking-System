import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightBooking } from '../shared/FlightBooking';
import { Observable } from 'rxjs';

@Injectable()
export class ViewDetailsService {
  private baseUrl = 'http://localhost:1020';

  constructor(private http: HttpClient) {}

  // ✅ Matches what component expects: Fetch all bookings
  view(): Observable<FlightBooking[]> {
    return this.http.get<FlightBooking[]>(`${this.baseUrl}/bookings`);
  }


  // ✅ Delete booking by ID
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/bookings/${id}`);
  }
}
