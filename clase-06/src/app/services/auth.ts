import { Injectable, inject } from '@angular/core';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  supabase = inject(Supabase);
}
