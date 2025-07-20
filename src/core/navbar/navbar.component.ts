import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import {NgIf,  isPlatformBrowser} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import  AOS from 'aos';

@Component({
  selector: 'app-navbar',
  imports: [
    NgIf,
    RouterLinkActive,
    RouterLink
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
  isOurCulture : boolean = false;

  setHamburger () : void {
    this.isLanguages = false;
    this.isHamburger = !this.isHamburger;
  };

  setLanguages () : void {
    this.isLanguages = !this.isLanguages;
  }

  setOurCulture () : void {
    this.isOurCulture = !this.isOurCulture;
  }
}
