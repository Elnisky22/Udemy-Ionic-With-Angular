import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: false,
})

export class EditOfferPage implements OnInit {
  place: Place | undefined;

  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        // redirect to offers page
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      const placeId = paramMap.get('placeId')!;
      this.place = this.placesService.getPlace(placeId);
    })
  }

}
