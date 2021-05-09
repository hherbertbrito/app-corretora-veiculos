import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-accordion',
  templateUrl: './menu-accordion.component.html',
  styleUrls: ['./menu-accordion.component.css']
})
export class MenuAccordionComponent implements OnInit {

  @Input()
  title: string;

  panelOpenState = false

  constructor() { }

  ngOnInit(): void {
  }

}
