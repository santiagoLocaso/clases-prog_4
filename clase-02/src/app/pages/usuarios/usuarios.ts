import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios = [
    {
      nombre: 'Agus',
      perfil: 'Profesor',
    },
    {
      nombre: 'Santi',
      perfil: 'Estudiante',
    },
    {
      nombre: 'Joaco',
      perfil: 'Estudiante',
    },
    {
      nombre: 'Tobi',
      perfil: 'Estudiante',
    },
  ];
  usuarioActual = 0;

  //encontrar referencias que vienen de forma externa enrutador / ruta activa
  //ActivatedRoute (da informacion de la ruta que esta activa)
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log('Se instancia el componente usuarios');
  }

  ngOnDestroy(): void {
    console.log('Se destruye el componente usuarios');
  }

  ngOnChanges() {
    console.log('changes');
  }

  ngDoCheck() {
    console.log('check');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.usuarioActual = parseInt(id);
    }
  }

  ngAfterContentInit(): void {
    console.log('Init content');
  }
}
