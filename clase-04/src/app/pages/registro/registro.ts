import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  // nombre = new FormControl('');
  // apellido = new FormControl('');
  // correo = new FormControl('');
  // contrasenia = new FormControl('');
  // repetirContrasenia = new FormControl('');

  //indicar que todo estos campos pertenecen al mismo formulario
  formulario = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.validarContrasenias,
    ]),
    repetirContrasenia: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.validarContrasenias,
    ]),
  });

  ngOnInit() {
    this.formulario.valueChanges.subscribe((value) => {
      console.log(value);
      console.log(this.formulario.controls);
    });

    this.formulario.statusChanges.subscribe((formControlStatus) => {
      console.log(formControlStatus);
    });
  }

  login = new FormGroup({
    correo: new FormControl(''),
    contrasenia: new FormControl(''),
  });

  enviarFormulario() {
    console.log(this.formulario);
    console.log(this.formulario.value);
    console.log(this.formulario.get('nombre'));
  }

  validarContrasenias(control: AbstractControl): ValidationErrors | null {
    const error = { iguales: false };

    if (!control.value) {
      return error;
    }

    const contrasenia = control.parent?.get('contrasenia')?.value;

    if (!contrasenia) {
      return error;
    }

    if (control.value === contrasenia) {
      return null;
    } else {
      return error;
    }
  }
}
