import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false,
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {

  }
}
