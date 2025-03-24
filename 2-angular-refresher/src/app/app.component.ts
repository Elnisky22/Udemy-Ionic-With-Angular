import { Component } from '@angular/core';
import { PersonsComponent } from './persons/persons.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [ PersonsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  persons: string[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http.get<any>('https://swapi.dev/api/people')
    .pipe(map(resData => {
      return resData.results.map((character: { name: any; }) => character.name);
    }))
    .subscribe((transformedData) => {
      this.persons = transformedData;
      this.isFetching = false;
    });
  }

  onPersonCreated(name: string) {
    this.persons.push(name);
  }

  ngOnInit() {
    this.isFetching = true;
    this.fetchPersons();
  }
}
