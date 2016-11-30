import {Injectable} from '@angular/core';
import {Person} from '../model/model.person';

@Injectable()
export class PersonService {

  getPersonList() : Person[] {
    return [ new Person("Marek","Dziekanski","dziekan@email.com")
      , new Person("John","Doe","john@hotmail.com")
      , new Person("Jane","Aurie", "jane@gms.com")
    ];
  }
}
