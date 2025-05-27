import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ],
})
export class CreateBookingComponent  implements OnInit {
  @Input() selectedPlace!: Place;
  @Input() selectedMode!: string;
  @ViewChild('f') form!: NgForm;

  startDate: string = new Date().toISOString().split('T')[0];

  availableFrom!: string;
  availableTo!: string;

  endDate!: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    if (this.selectedPlace) {
      this.availableFrom = this.selectedPlace.availableFrom.toISOString().split('T')[0];
      this.availableTo = this.selectedPlace.availableTo.toISOString().split('T')[0];
    }

    if (this.selectedMode === 'random') {
      const startDate = new Date(this.availableFrom);
      const endDate = new Date(this.availableTo);

      this.startDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - 7 * 24 * 60 * 60 * 1000 - startDate.getTime())).toISOString().split('T')[0];

      this.endDate = new Date(new Date(this.startDate).getTime() + Math.random() * (endDate.getTime() - new Date(this.startDate).getTime())).toISOString().split('T')[0];
    }
  }

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace() {
    if (!this.form.valid || !this.datesValid()) {
      return;
    }
    this.modalController.dismiss(
      {
        bookingData: {
          firstName: this.form.value['first-name'],
          lastName: this.form.value['last-name'],
          guestNumber: +this.form.value['guest-number'],
          startDate: new Date(this.form.value['date-from']),
          endDate: new Date(this.form.value['date-to']),
        }
      },
      'confirm'
    );
  }

  datesValid() {
    if (!this.form) return false;
    
    const startDate = this.form.value['date-from'],
          endDate = this.form.value['date-to'];

    if (startDate === undefined || endDate === undefined) {
      return false;
    }

    return new Date(endDate) > new Date(startDate);
  }
}
