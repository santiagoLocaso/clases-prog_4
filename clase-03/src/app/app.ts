import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('clase-03');

  apiService = inject(ApiService);
  nombre = '';

  traer() {
    this.apiService.traerPorNombre(this.nombre);
  }
}
