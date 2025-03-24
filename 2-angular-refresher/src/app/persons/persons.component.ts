import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persons',
  imports: [CommonModule, FormsModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})

export class PersonsComponent {
  @Input() personList: string[] | undefined;
  @Input() isFetching: boolean | undefined;

  @Output() personCreated = new EventEmitter<string>();
  enteredPersonName: string = "";

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.personCreated.emit(this.enteredPersonName);
    this.enteredPersonName = "";
  }
}
