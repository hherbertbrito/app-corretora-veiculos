import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('titleTollbar',{static: false})
  titleTollbar : ElementRef;

  @ViewChild('drawer',{static: false})
  drawer: MatDrawer;

  title:string

  page: string

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.title= 'Teste Pratico Angular';
  }

  setPathPage(page: string) {
    this.page = page
  }

  /**
   * Event toggle do componente
   */
   toggle() {
    const elemento = this.titleTollbar.nativeElement;
    const active =! elemento.classList.toggle('active');
    this.drawer.toggle();

    if(!active) {
     elemento.removeAttribute('hidden');
     elemento.setAttribute('aria-expanded', active);
    } else {
      elemento.setAttribute('hidden','');
      elemento.setAttribute('aria-expanded', active);
    }
  }
}
