import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>(
    [
      new Place(
        'p1',
        'Manhattan Mansion',
        'https://picsum.photos/800/400',
        'In the heart of New York City',
        149.99,
        new Date('2025-03-10'),
        new Date('2030-10-31'),
        'abc'
      ),
      new Place(
        'p2',
        'L\'Amour Toujours',
        'https://picsum.photos/300',
        'A romantic place in Paris',
        189.99,
        new Date('2025-03-10'),
        new Date('2030-10-31'),
        'abc'
      ),
      new Place(
        'p3',
        'The Foggy Palace',
        'https://picsum.photos/350',
        'Not your average city trip!',
        99.99,
        new Date('2025-03-10'),
        new Date('2030-10-31'),
        'bcd'
      ),
    ]
  );

  get places(): import('rxjs').Observable<Place[]> {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) { }

  getPlace(id: string) {
    return this.places.pipe(take(1), map(places => {
      return places.find(place => place.id === id);
    }))

    // const place = this.places.find(p => p.id === id);
    // if (!place) {
    //   throw new Error('Place not found');
    // }
    // return place as Place;
  }

  addPlace(
    title: string,
    description: string,
    imageUrl: string,
    price: number,
    availableFrom: Date,
    availableTo: Date,
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      imageUrl,
      description,
      price,
      availableFrom,
      availableTo,
      this.authService.userId
    );
    return this.places.pipe(take(1), delay(1000), tap(places => {
      this._places.next(places.concat(newPlace));
    }));
  }

  updatePlace(placeId: string, title: string, description: string,) {
    return this.places.pipe(take(1), delay(1000), tap(places => {
      const updatedPlaceIndex = places.findIndex(p => p.id === placeId);
      const updatedPlaces = [...places];
      const oldPlace = { ...places[updatedPlaceIndex] };
      updatedPlaces[updatedPlaceIndex] = new Place(
        oldPlace.id,
        title,
        oldPlace.imageUrl,
        description,
        oldPlace.price,
        oldPlace.availableFrom,
        oldPlace.availableTo,
        oldPlace.userId
      );
      this._places.next(updatedPlaces);
    }));
  }
}
