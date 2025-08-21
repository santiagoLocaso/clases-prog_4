import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  imports: [FormsModule],
  templateUrl: './bindeos.html',
  styleUrl: './bindeos.css',
})
export class Bindeos {
  nombre: string = 'Santi';
  contador: number = 0;

  link: string = 'https://google.com';
  estilo = 'background-color: red; height: 100px;';

  contar() {
    this.contador++;
    console.log(this.contador);
    this.link = 'https://github.com';
  }

  borrar() {
    this.nombre = '';
  }
}

//Binding o bindeo
//Conectar el html con el TS

//{{ }} -> variable TS al HTML (va directo al renderizado, lo que se muestra)
//[] -> variables TS a atributos HTML
//() -> funciones TS a atributos HTML (para pasar funciones/metodos)

//bindeo doble -> [()]  (se puede usar en forms ya que capta cambios de TS a HTML y de HTML a TS)
