import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  inputs: ['name:Marek', 'isEnabled'],
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  name: string;
  isEnabled: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
