import { Component, OnInit } from '@angular/core';
import { Person } from '../model/model.person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  providers: [PersonService]
})
export class ContentComponent implements OnInit {
  personList: Person[];
  selectedPerson: Person; // = new Person("","","");

  constructor(private personService: PersonService) {
    this.personList = personService.getPersonList();
  }

  onPersonSelected(person: Person) {
    console.log("Person changed: " + person.lastName);
    this.selectedPerson = person;
  }

  ngOnInit() {
  }

}
