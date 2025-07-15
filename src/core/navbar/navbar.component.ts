import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';
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
  ngOnInit(): void {
      AOS.init({})
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
