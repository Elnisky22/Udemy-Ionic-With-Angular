import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([]);

  get places(): import('rxjs').Observable<Place[]> {
    return this._places.asObservable();
  }

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  fetchPlaces() {
    return this.http
      .get<{ [key: string]: PlaceData} >('https://ionic-angular-6476b-default-rtdb.firebaseio.com/offered-places.json')
      .pipe(
        map(resData => {
          const places = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              places.push(
                new Place(
                  key,
                  resData[key].title,
                  resData[key].imageUrl,
                  resData[key].description,
                  resData[key].price,
                  new Date(resData[key].availableFrom),
                  new Date(resData[key].availableTo),
                  resData[key].userId
                )
              )
            }
          }
          return places;
        }),
        tap(places => {
          this._places.next(places);
        })
      )
  }

  getPlace(id: string) {
    return this.http
      .get<PlaceData>(`https://ionic-angular-6476b-default-rtdb.firebaseio.com/offered-places/${id}.json`)
      .pipe(map(resData => {
        return new Place(
          id,
          resData.title,
          resData.imageUrl,
          resData.description,
          resData.price,
          new Date(resData.availableFrom),
          new Date(resData.availableTo),
          resData.userId
        )
      }))

    // return this.places.pipe(take(1), map(places => {
    //   return places.find(place => place.id === id);
    // }))

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
    let generatedId: string;
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

    return this.http
      .post<{name: string}>('https://ionic-angular-6476b-default-rtdb.firebaseio.com/offered-places.json', { ...newPlace, id: null })
      .pipe(
        switchMap(resData => {
          generatedId = resData.name;
          return this.places;
        }),
        take(1),
        tap(places => {
          newPlace.id = generatedId; // Assign the generated ID from the server
          this._places.next(places.concat(newPlace));
        })
      );

    // return this.places.pipe(take(1), delay(1000), tap(places => {
    //   this._places.next(places.concat(newPlace));
    // }));
  }

  updatePlace(placeId: string, title: string, description: string,) {
    let updatedPlaces: Place[];

    return this.places.pipe(take(1), switchMap(places => {
      if (!places || places.length <= 0) {
        return this.fetchPlaces();
      } else {
        return of(places);
      }
    }), switchMap(places => {
      const updatedPlaceIndex = places.findIndex(p => p.id === placeId);
      updatedPlaces = [...places];
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
      return this.http
        .put(`https://ionic-angular-6476b-default-rtdb.firebaseio.com/offered-places/${placeId}.json`, {
          ...updatedPlaces[updatedPlaceIndex], id: null
        });
    })
    , tap(() => {
      this._places.next(updatedPlaces);
    }))
  }
}
