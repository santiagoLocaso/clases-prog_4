import { Routes } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Login } from './login/login';
import { Error } from './error/error';
import { Bindeos } from './bindeos/bindeos';

export const routes: Routes = [
  {
    path: 'bienvenida',
    component: Bienvenida,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'error',
    component: Error,
  },
  {
    path: 'bindeos',
    component: Bindeos,
  },
];

// /tutoriales -> Tutoriales
// /bienvenida -> Bienvenida
