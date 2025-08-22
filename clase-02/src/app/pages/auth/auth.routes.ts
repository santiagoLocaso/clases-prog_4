import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  //rutas hijas
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((module) => module.Login),
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro').then((module) => module.Registro),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil').then((module) => module.Perfil),
  },
];
