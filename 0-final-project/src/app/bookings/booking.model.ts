export class Booking {
    constructor(
        public id: string,
        public placeId: string,
        public userId: string,
        public placeTitle: string,
        public guestNumber: number,
        // public reservationDate: Date,
        // public totalPrice: number
    ) {}
}