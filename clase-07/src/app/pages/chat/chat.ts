import { Component, inject, signal } from '@angular/core';
import Mensaje from '../../interfaces/mensaje';
import { Realtime } from '../../services/realtime';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  realtime = inject(Realtime);

  mensajes = signal<Mensaje[]>([
    {
      usuario: 'Joaquin',
      created_at: new Date('2025-09-10 22:26:48.444219+00'),
      mensaje: 'Hola harcodeado',
    },
    {
      usuario: 'Tobias',
      created_at: new Date('2025-09-10 22:27:48.444219+00'),
      mensaje: 'Chau harcodeado',
    },
  ]);

  ngOnInit(): void {
    this.realtime.traerTodosFijo().then((array) => {
      this.mensajes.set(array);
    });
    this.realtime.canal
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'chat',
        },
        (payload) => {
          // this.mensajes.set([...this.mensajes(), payload.new as Mensaje]);
          this.mensajes.update((valorAnterior) => {
            valorAnterior.push(payload.new as Mensaje);
            return valorAnterior.slice();
          });
        }
      )
      .subscribe();
  }

  msj = '';
  usuario = '';

  enviarMensaje() {
    this.realtime.crear(this.msj, this.usuario);
  }
}
