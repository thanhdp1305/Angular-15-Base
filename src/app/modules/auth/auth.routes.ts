import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { noAuthGuard } from '../core/guards/no-auth.guard';

export const AuthRoutes: Routes = [
  {
    path: 'sign-in',
    canActivate: [noAuthGuard],
    component: SigninComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
];
