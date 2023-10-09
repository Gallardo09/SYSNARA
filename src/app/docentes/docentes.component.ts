import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  /*Declaración de las Propiedades*/
  year?: string;
  Identidad?: string;
  NombreDelDocente?: string;
  ID?: string;
  Profesion?: string;
  Genero?: string;
  Celular?: string;
  Telefono?: string;
  Correo?: string;
  Direccion?: string;
  totalfilas?: string; // Inicialmente, el total de filas es 0
  fechaEstablecida?: string; /*Propiedades en ngOnInit*/
  registrodocentes: any; /*Propiedad para egragar valores a la tabla.*/
  contadorFilas: number = 0; /*Contador de las filas en la tabla*/


/*Listas en la table*/
listaDocente: any[] = [];
/*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
formDocentes: FormGroup;
constructor(private fb: FormBuilder, private toastr: ToastrService) {
  this.formDocentes = this.fb.group({
    year: ['', [Validators.required]],
    Identidad: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern("[0-9]+")]],
    NombreDelDocente: ['', [Validators.required]],
    ID: [{ value: '', disabled: true }, [Validators.required]],
    Profesion: ['', [Validators.required]],
    Genero: ['', [Validators.required]],
    Celular: ['', [Validators.required, Validators.maxLength(12)]],
    Telefono: ['', [Validators.required, Validators.maxLength(12)]],
    Correo: ['', [Validators.required, Validators.email]],
    Direccion: ['', [Validators.required]]
  });
}
  /*FUNCIÓN EN EL BOTON AGREGAR*/
    GuardarDocente(): void {
      console.log(this.formDocentes);
      if (this.formDocentes.valid) { 
        const listaDocente: any = {
          year: this.formDocentes.get('year')?.value,
          Identidad: this.formDocentes.get('Identidad')?.value,
          NombreDelDocente: this.formDocentes.get('NombreDelDocente')?.value,
          ID: this.formDocentes.get('ID')?.value,
          Profesion: this.formDocentes.get('Profesion')?.value,
          Genero: this.formDocentes.get('Genero')?.value,
          Celular: this.formDocentes.get('Celular')?.value,
          Telefono: this.formDocentes.get('Telefono')?.value,
          Correo: this.formDocentes.get('Correo')?.value,
          Direccion: this.formDocentes.get('Direccion')?.value,
    }

    // Agrega los datos a la lista
    this.listaDocente.unshift(listaDocente);
  
    // Limpia el formulario
    this.formDocentes.reset();

    this.contadorFilas++; //Aumento en el acumulador contador
    this.totalfilas = (this.contadorFilas + 1).toString();

    // Muestra un mensaje de éxito
    this.toastr.success('Datos Guardados!', 'Registrar Docente', { timeOut: 2000 });
  }
  // Si el formulario no es válido, mostrar mensajes de error para campos vacíos
    else { 
      const controlNames = Object.keys(this.formDocentes.controls);

      for (const controlName of controlNames) {
        const control = this.formDocentes.get(controlName);
        if (control && control.invalid) {
          this.toastr.error(`El campo ${controlName} es obligatorio.`, 'Error', { timeOut: 2000 });
        }
      }
    }    
}
  
  LimpiarFormDocente(): void{
    this.formDocentes.reset();
  }
      // ngOnInit(): void {
  //   const fechaActual = new Date();
  //   const year = fechaActual.getFullYear();
  //   this.fechaEstablecida = `${year}`;
  // }
  ngOnInit(): void {
    const fechaActual = new Date();
    this.year = fechaActual.getFullYear().toString();
    // Establece el valor del contador de filas en el campo ID Docente
    this.totalfilas = (this.contadorFilas + 1).toString();
  }
  /*FUNCIÓN PARA SOLO PERMITIR NUMEROS*/
  onKeyPress(event: KeyboardEvent) {
    // Verificar si la tecla presionada es un número (0-9)
    const charCode = event.which || event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Evitar que se ingrese la tecla no numérica
    } else {
      console.log('Debe ingresar solo números.')
    }
  }

}
