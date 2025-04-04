import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ],
})
export class CreateBookingComponent  implements OnInit {
  @Input() selectedPlace: Place | undefined;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalController.dismiss({message: 'Booking confirmed!'}, 'confirm');
  }
}
