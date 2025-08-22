import { Routes } from '@angular/router';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full', //matchea antes de hacer la redireccion
  },
  {
    path: 'bienvenida',
    loadComponent: () =>
      import('./pages/bienvenida/bienvenida').then((module) => module.Bienvenida), //importar solo cuando se llame el componente para consumir menos recursos
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth').then((module) => module.Auth), //componente padre
    loadChildren: () => import('./pages/auth/auth.routes').then((routes) => routes.authRoutes),
  },
  {
    path: 'users/:id',
    redirectTo: 'usuarios/:id',
    pathMatch: 'prefix',
  },
  {
    path: 'usuarios/:id',
    component: Usuarios,
  },
  {
    path: '**', //cualquier ruta no definida
    loadComponent: () => import('./pages/error/error').then((module) => module.Error),
    // redirectTo: 'bienvenida',
  },
];

//evitar repetir el componente en las rutas, ej bienvenida porque angular puede actualizar el componente

//el orden es importante en las rutas porque angular recorre el array de rutas en orden y chequea el resultado exacto si '**' que es cualquier ruta esta antes que otra ruta no se va a poder acceder a esa misma
