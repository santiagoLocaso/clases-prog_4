import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  email = '';
  password = '';

  protected authService = inject(Auth);

  crearCuenta() {
    this.authService.crearCuenta(this.email, this.password);
  }
  iniciarSesion() {
    this.authService.iniciarSesion(this.email, this.password);
  }
  cerrarSesion() {
    this.authService.cerrarSesion();
  }
}
