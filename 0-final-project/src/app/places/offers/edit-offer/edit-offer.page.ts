import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  form!: FormGroup;

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

      this.form = new FormGroup({
        title: new FormControl(this.place?.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place?.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        })
      })
    })
  }

  onEditOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
    // this.placesService.updatePlace(
    //   this.place!.id,
    //   this.form.value.title,
    //   this.form.value.description
    // );
    // this.form.reset();
    // this.navController.navigateBack('/places/tabs/offers');
  }
}
