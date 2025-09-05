import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private url = 'https://ysrxxdsrmioexwbigghd.supabase.co';
  private key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzcnh4ZHNybWlvZXh3YmlnZ2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzY2NjIsImV4cCI6MjA3MjUxMjY2Mn0.YrvtmXQkyu4JhTegeiW-azWKy8YxD-gnGaKY3fwd8_o';

  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.url, this.key);
  }
}
