import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Db } from './services/db';
import { Auto } from './classes/auto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('clase-06');

  autos = signal<Auto[]>([]);
  error = signal<string | null>(null);
  dbService = inject(Db);

  async ngOnInit() {
    const respuestaSelect = await this.dbService.traerAutos();
    this.autos.set(respuestaSelect);
    const auto = new Auto();

    auto.marca = 'VW';
    auto.modelo = 'fitito';
    auto.precio = 2;
    auto.en_venta = true;

    // const respuestaInsert = await this.dbService.crearAuto(auto);

    // this.error.set(respuestaInsert);
  }
}
