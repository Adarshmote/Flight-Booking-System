import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from './api.config';

@Injectable({ providedIn: 'root' })
export class BookingService {

  constructor(private http: HttpClient) {}

  confirmBooking(payload: any) {
    return this.http.post(`${API_BASE_URL}/bookings`, payload);
  }
}
