import { Component } from '@angular/core';
import { Listado } from '../../components/listado/listado';

@Component({
  selector: 'app-profesores',
  imports: [Listado],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  profesores = [
    {
      nombre: 'AB',
      apellido: 'CD',
      legajo: 4567,
    },
  ];
}
