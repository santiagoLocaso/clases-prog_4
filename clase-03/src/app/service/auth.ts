import { Injectable } from '@angular/core';

@Injectable({
  //decorador que le dice a angular que esta clase puede participar ne la injeccion
  providedIn: 'root',
})
export class Auth {
  usuarioActual = {
    nombre: 'agus',
    apellido: 'lande',
  };

  guardarUsuario(nombre: string, apellido: string): void {
    this.usuarioActual.nombre = nombre;
    this.usuarioActual.apellido = apellido;
  }
}
