import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';

import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false,
})
export class PlaceDetailPage implements OnInit {
  place: Place | undefined;

  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        // redirect to offers page
        this.navController.navigateBack('/places/tabs/discover');
        return;
      }
      const placeId = paramMap.get('placeId')!;
      this.place = this.placesService.getPlace(placeId);
    })
  }

  onBookPlace() {
    // this.router.navigate(['/places/tabs/discover']);
    // this.navController.navigateBack('/places/tabs/discover');

    this.actionSheetController.create({
      header: 'Choose an action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            console.log('Selected date!');
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    })
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);

    this.modalController.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place
      }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
    });
  }
}
