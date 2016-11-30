import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../model/model.menu-item';
import {Person} from '../model/model.person';
import {MenuService} from '../services/menu.service';


@Component({
  selector: 'app-sidebar',
  inputs: ['persons'],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [MenuService]
})
export class SidebarComponent implements OnInit {
  menu: MenuItem[] = [];
  persons: Person[] = [] ;
  selectedPerson: Person;

  constructor(menuService: MenuService) {
    this.menu = menuService.getSidebarMenu();
  }

  onSelect(person) {
    this.selectedPerson = person;

  }

  ngOnInit() {
  }

}
