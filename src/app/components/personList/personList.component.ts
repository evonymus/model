import {Component, EventEmitter} from '@angular/core';
import {Person} from '../../model/model.person';

@Component({
  selector: 'app-person-list',
  inputs: ['personList'],
  outputs: ['onPersonSelected'],
  templateUrl: './personList.component.html'

})
export class PersonListComponent {
  personList: Person[];
  selectedPerson: Person;

  onPersonSelected: EventEmitter<Person>;

  constructor() {
    this.onPersonSelected = new EventEmitter();
  }

  onClick(person: Person): void {
    console.log("PersonListComponent clicked: " + person.lastName);
    this.selectedPerson = person;
    this.onPersonSelected.emit(person);
  }

  isPersonSelected(person: Person): boolean {
    if (!person || !this.selectedPerson) {
      return false;
    }
    return person.eMail == this.selectedPerson.eMail;
  }
}
