import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Place } from '../../place.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class OfferItemComponent  implements OnInit {
  @Input() offer!: Place;

  constructor() { }

  ngOnInit() {}

  getDummyDate() {
    let today = new Date();

    let month = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() is 0-based
    let day = String(today.getDate()).padStart(2, '0');
    let year = today.getFullYear();

    let formatted = `${month}-${day}-${year}`;
    return formatted;
  }
}
