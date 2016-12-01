import {Component} from '@angular/core';
import {Person} from '../../model/model.person';

@Component({
  selector: 'app-person',
  inputs: ['person'],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  public person: Person;

}
