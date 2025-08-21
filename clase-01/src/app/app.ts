import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Bindeos } from './bindeos/bindeos';
import { Error } from './error/error';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenida, Bindeos, Error, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
//componente
export class App {}
