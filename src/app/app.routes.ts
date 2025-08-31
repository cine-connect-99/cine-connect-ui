import { Routes } from '@angular/router';
import { LoginComponent } from './lazy/log-in/login/login';
import { Layout } from './lazy/landing-page/layout/layout';
import { Main } from './lazy/home-page/main/main';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: Layout },
  { path: 'profile', loadComponent: () => import('./lazy/landing-page/profile/profile').then(m => m.Profile) },
  { path: 'main', component: Main },
  { path: '**', redirectTo: 'main' }
];

