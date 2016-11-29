import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../model/model.menu-item';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [MenuService]
})
export class SidebarComponent implements OnInit {
  menu: MenuItem[];

  constructor(menuService: MenuService) {
    this.menu = menuService.getSidebarMenu();
  }

  ngOnInit() {
  }

}
