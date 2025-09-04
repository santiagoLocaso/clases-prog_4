import { Injectable, signal, WritableSignal } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private url = 'https://ysrxxdsrmioexwbigghd.supabase.co';
  private key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzcnh4ZHNybWlvZXh3YmlnZ2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzY2NjIsImV4cCI6MjA3MjUxMjY2Mn0.YrvtmXQkyu4JhTegeiW-azWKy8YxD-gnGaKY3fwd8_o';

  private supabase: SupabaseClient<any, 'public', 'public', any, any>;

  public usuarioActual: WritableSignal<User | null> = signal<User | null>(null);

  constructor() {
    this.supabase = createClient(this.url, this.key);

    //observable - llama a su callback en el cambio del estado de auth
    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);
      this.usuarioActual.set(session !== null ? session.user : null);
    });
  }

  async iniciarSesion(email: string, password: string) {
    const respuesta = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (respuesta.error) {
      console.log(respuesta.error);
      return;
    }
    console.log(respuesta.data);
  }

  async crearCuenta(email: string, password: string) {
    const respuesta = await this.supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          algo: 'ejemplo',
        },
      },
    });
    if (respuesta.error) {
      console.log(respuesta.error);
      return;
    }
    console.log(respuesta.data);
  }

  cerrarSesion() {
    this.supabase.auth.signOut();
  }
}

// Sesiones

// 1. Crear la cuenta
// 2. Iniciar sesion
// 3. Cerrar sesion
