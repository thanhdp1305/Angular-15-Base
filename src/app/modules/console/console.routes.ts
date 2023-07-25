import { Routes } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExampleComponent } from './components/example/example.component';
import { authGuard } from '../core/guards/auth.guard';
import { noAuthGuard } from '../core/guards/no-auth.guard';

export const ConsoleRoutes: Routes = [
  {
    path: '',
    canActivate: [noAuthGuard],
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'example-document',
        component: ExampleComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];
