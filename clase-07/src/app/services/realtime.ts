import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import Mensaje from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root',
})
export class Realtime {
  private sup = inject(Supabase);

  // channel que canal de informacion escuchar
  canal = this.sup.supabase.channel('table-db-changes');

  constructor() {}

  async traerTodosFijo(): Promise<Mensaje[]> {
    const { data, error } = await this.sup.supabase.from('chat').select('*');

    if (error) {
      return [];
    }
    return data as Mensaje[];
  }

  async crear(mensaje: string, usuario: string): Promise<void> {
    await this.sup.supabase.from('chat').insert({ mensaje: mensaje, usuario: usuario });
  }
}
