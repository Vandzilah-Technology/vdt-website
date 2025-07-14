import { Routes } from '@angular/router';
import {Appname} from '../misc/Appname';
import {AppComponent} from './app.component';

export const routes: Routes = [

  {
    path: '',
    component: AppComponent,
    title: `${Appname.appName} - Home`,
  }
];
