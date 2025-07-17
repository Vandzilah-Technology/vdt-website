import { Routes } from '@angular/router';
import {Appname} from '../misc/Appname';
import {HomeComponent} from '../pages/home/home.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    title: `${Appname.appName}`,
  }
];
