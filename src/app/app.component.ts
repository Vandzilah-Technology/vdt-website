import { Component } from '@angular/core';
import {NavbarComponent} from '../core/navbar/navbar.component';
import {FooterComponent} from '../core/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vdt-website';
}
