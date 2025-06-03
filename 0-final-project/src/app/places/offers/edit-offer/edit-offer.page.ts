import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: false,
})

export class EditOfferPage implements OnInit, OnDestroy {
  place: Place | undefined;
  placeId!: string;
  form!: FormGroup;
  isLoading = false;
  private placeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        // redirect to offers page
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeId = paramMap.get('placeId')!;

      this.isLoading = true;
      this.placeSub = this.placesService.getPlace(this.placeId).subscribe(place => {
        this.place = place;
      });

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
      this.isLoading = false;
    }, error => {
      this.alertCtrl.create({
        header: 'An error ocurred',
        message: 'Place could not be fetched',
        buttons: [{
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/places/tabs/offers']);
          }
        }]
      }).then(alertEl => {
        alertEl.present();
      })
    })
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

  onEditOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Updating place...'
    }).then(loadingEl => {
      loadingEl.present();
      this.placesService.updatePlace(
        this.place!.id,
        this.form.value.title,
        this.form.value.description
      ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/places/tabs/offers']);
      })
    })

    // this.placesService.updatePlace(
    //   this.place!.id,
    //   this.form.value.title,
    //   this.form.value.description
    // );
    // this.form.reset();
    // this.navController.navigateBack('/places/tabs/offers');
  }
}
