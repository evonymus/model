import { Component } from '@angular/core';
import {Person} from './model/model.person';
import {PersonService} from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent {
  title = 'app works!';
  public persons: Person[] = [];

  constructor(personService: PersonService) {
    this.persons = personService.getPersonList();
  }

  onClick() {
    this.title = "Changed";
  }
}
