export interface Bookings {
  bookingId: number;       // Mapped from: id
  passengerName: string;
  noOfTickets: number;
  amount: number;          // Mapped from: totalAmount
  flightId: string;
}
