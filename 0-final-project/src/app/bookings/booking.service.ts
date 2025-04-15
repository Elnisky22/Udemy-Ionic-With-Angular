import { Injectable } from "@angular/core";

import { Booking } from "./booking.model";

@Injectable({providedIn: 'root'})

export class BookingService {
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            placeTitle: 'Manhattan Mansion',
            guestNumber: 2,
            userId: 'abc'
        }
    ];

    get bookings() {
        return [...this._bookings];
    }

    addBooking(booking: Booking) {
        this._bookings.push(booking);
    }

    cancelBooking(bookingId: string) {
        this._bookings = this._bookings.filter(b => b.id !== bookingId);
    }
}