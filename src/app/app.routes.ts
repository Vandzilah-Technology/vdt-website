import { Routes } from '@angular/router';
import {Appname} from '../misc/Appname';
import {HomeComponent} from '../pages/home/home.component';
import {ProjectsComponent} from '../pages/projects/projects.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    title: `${Appname.appName}`
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: `${Appname.appName} - Projects`,
  }
];
