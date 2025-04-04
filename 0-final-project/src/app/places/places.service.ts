import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'https://picsum.photos/800/400', 'In the heart of New York City', 149.99),
    new Place('p2', 'L\'Amour Toujours', 'https://picsum.photos/300', 'A romantic place in Paris', 189.99),
    new Place('p3', 'The Foggy Palace', 'https://picsum.photos/350', 'Not your average city trip!', 99.99),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string): Place {
    const place = this.places.find(p => p.id === id);
    if (!place) {
      throw new Error('Place not found');
    }
    return place as Place;
  }
}
