import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  inputs: ['message'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public message: string = " ";


  constructor() { }

  ngOnInit() {
  }

}
