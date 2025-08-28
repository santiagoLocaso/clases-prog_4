import { Routes } from '@angular/router';
import { Alumnos } from './pages/alumnos/alumnos';
import { Profesores } from './pages/profesores/profesores';
import { Perfil } from './pages/perfil/perfil';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
  {
    path: 'alumnos',
    component: Alumnos,
  },
  {
    path: 'profesores',
    component: Profesores,
  },
  {
    path: 'perfil',
    component: Perfil,
  },
  {
    path: 'registro',
    component: Registro,
  },
];
