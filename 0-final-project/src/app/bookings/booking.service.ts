import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, switchMap, take, tap, map } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Booking } from "./booking.model";
import { AuthService } from "../auth/auth.service";

interface BookingData {
    bookedFrom: string,
    bookedTo: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    placeId: string,
    placeImage: string,
    placeTitle: string,
    userId: string
}

@Injectable({providedIn: 'root'})

export class BookingService {
    private _bookings = new BehaviorSubject<Booking[]>([]);

    get bookings() {
        return this._bookings.asObservable();
    }

    constructor(
        private authService: AuthService,
        private http: HttpClient
    ) {}

    fetchBookings() {
        return this.http
        .get< {[key: string]: BookingData} >(
            `https://ionic-angular-6476b-default-rtdb.firebaseio.com/bookings.json?orderBy="userId"&equalTo="${this.authService.userId}"`
        ).pipe(
            map(resData => {
                const bookings = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key)) {
                        bookings.push(new Booking(
                            key,
                            resData[key].placeId,
                            resData[key].userId,
                            resData[key].placeTitle,
                            resData[key].placeImage,
                            resData[key].firstName,
                            resData[key].lastName,
                            resData[key].guestNumber,
                            new Date(resData[key].bookedFrom),
                            new Date(resData[key].bookedTo)
                        ))
                    }
                }
                return bookings;
            }),
            tap(bookings => {
                this._bookings.next(bookings);
            })
        );
    }

    addBooking(
        placeId: string,
        placeTitle: string,
        placeImage: string,
        firstName: string,
        lastName: string,
        guestNumber: number,
        dateFrom: Date,
        dateTo: Date
    ) {
        let generatedId: string;
        const newBooking = new Booking(Math.random().toString(), placeId, this.authService.userId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);

        return this.http
            .post< {name: string} >(
                'https://ionic-angular-6476b-default-rtdb.firebaseio.com/bookings.json',
                {...newBooking, id: null}
            )
            .pipe(
                switchMap(resData => {
                    generatedId = resData.name;
                    return this.bookings;
                }),
                take(1),
                tap(bookings => {
                    newBooking.id = generatedId;
                    this._bookings.next(bookings.concat(newBooking));
                })
            );

        // return this.bookings.pipe(
        //     take(1),
        //     delay(1000),
        //     tap(bookings => {
        //         this._bookings.next(bookings.concat(newBooking));
        //     })
        // );
    }

    cancelBooking(bookingId: string) {
        return this.http
        .delete(
            `https://ionic-angular-6476b-default-rtdb.firebaseio.com/bookings/${bookingId}.json`
        )
        .pipe(
            switchMap(() => {
                return this.bookings;
            }),
            take(1),
            tap(bookings => {
                this._bookings.next(bookings.filter(booking => booking.id !== bookingId));
            })
        )

        // return this.bookings.pipe(
        //     take(1),
        //     delay(1000),
        //     tap(bookings => {
        //         this._bookings.next(bookings.filter(booking => booking.id !== bookingId));
        //     })
        // );
    }
}