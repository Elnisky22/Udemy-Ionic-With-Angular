export class Place {
    constructor(
        public id: string,
        public title: string,
        public imageUrl: string,
        public description: string,
        public price: number,
        public availableFrom: Date,
        public availableTo: Date,
    ) {}
}