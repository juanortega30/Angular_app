import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Gastos } from './gastos/gastos';

export const routes: Routes = [
    {
        path: 'inicio',
        component: Layout,
    },
    { path: 'gastos',
       component: Gastos, 
      },
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
