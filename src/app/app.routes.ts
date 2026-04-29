import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Gastos } from './features/gastos/gastos';
import { Login } from './features/auth/components/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: Login 
  },
  { 
    path: 'inicio', 
    component: Layout,
    canActivate: [authGuard],
    children: [
      {
        path: 'gastos', // <-- Lo dejamos vacío para que cargue directo en /inicio
        component: Gastos
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];