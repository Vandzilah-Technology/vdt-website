import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {NgIf,  isPlatformBrowser} from '@angular/common';
import  AOS from 'aos';

@Component({
  selector: 'app-navbar',
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  languages: any[] = [
    {
      languageName: 'English',
      languageCode: 'EN',
      selected: false
    }
  ]

  isHamburger : boolean = false;
  isLanguages : boolean = false;

  setHamburger () : void {
    this.isLanguages = false;
    this.isHamburger = !this.isHamburger;
  };

  setLanguages () : void {
    this.isLanguages = !this.isLanguages;
  }
}
