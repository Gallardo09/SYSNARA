import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.css']
})
export class PadresComponent {
  
/*Declaración de Propiedades*/
  Identidad?: string;
  NombreDelEncargado?: string;
  IDEncargado?: string;
  Parentesco?: string;
  Profesion?: string;
  Genero?: string;
  Celular?: string;
  Telefono?: string;
  Correo?: string;
  Direccion?: string;
  Observacion?: string;
  totalfilas?: string; // Inicialmente, el total de filas es 0
  registroencargados: any; /*Propiedad para egragar valores a la tabla.*/
  contadorFilas: number = 0; /*Contador de las filas en la tabla*/
  contadorEncargados: number=0; //Cuenta la cantidad de registros en la tabla.

  listaEncargado: any[] = [ /*Listas en la table*/
  {Identidad: '0502199400523', NombreDelEncargado: 'JUAN ANGEL PEREZ GOMEZ', IDEncargado: '1', Parentesco: 'PADRE', Profesion: 'OPERARIO', Genero: 'MASCULINO', Celular: '97824537', Telefono: '25253636', Correo: 'juanpererz@gmail.com', Direccion: 'CHOLOMA, CORTÉS', Observacion: 'NINGUNA'},
];

ngOnInit(): void { //ngOnInit() se ejecuta antes de que las vistas del componente hayan sido inicializadas
  // Establece el valor del contador de filas en el campo ID Docente
  this.totalfilas = (this.contadorFilas + 1).toString();
  this.contarFilasTabla();
}

/*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
formEncargado: FormGroup;
constructor(private fb: FormBuilder, private toastr: ToastrService) {
  this.formEncargado = this.fb.group({
    Identidad: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern("[0-9]+")]],
    NombreDelEncargado: ['', [Validators.required]],
    IDEncargado: [{ value: '', disabled: true }, [Validators.required]],
    Parentesco: ['', [Validators.required]],
    Profesion: ['', [Validators.required]],
    Genero: ['', [Validators.required]],
    Celular: ['', [Validators.required]],
    Telefono: ['', [Validators.required]],
    Correo: ['', [Validators.required, Validators.email]],
    Direccion: ['', [Validators.required]],
    Observacion: ['', [Validators.required]],
    contadorEncargados: [{ value: 0, disabled: true }, [Validators.required]],
  });
}
  /*----------------------------------- GUARDAR -----------------------------------*/
  RegistrarEncargados(): void {
      console.log(this.formEncargado);
      if (this.formEncargado.valid) { 
        const listaEncargado: any = {
          Identidad: this.formEncargado.get('Identidad')?.value,
          NombreDelEncargado: this.formEncargado.get('NombreDelEncargado')?.value,
          IDEncargado: this.formEncargado.get('IDEncargado')?.value,
          Parentesco: this.formEncargado.get('Parentesco')?.value,
          Profesion: this.formEncargado.get('Profesion')?.value,
          Genero: this.formEncargado.get('Genero')?.value,
          Celular: this.formEncargado.get('Celular')?.value,
          Telefono: this.formEncargado.get('Telefono')?.value,
          Correo: this.formEncargado.get('Correo')?.value,
          Direccion: this.formEncargado.get('Direccion')?.value,
          Observacion: this.formEncargado.get('Observacion')?.value,
    }

    // Agrega los datos a la lista
    this.listaEncargado.unshift(listaEncargado);
  
    // Limpia el formulario
    this.formEncargado.reset();

    this.contadorFilas++; //Aumento en el acumulador contador
    this.totalfilas = (this.contadorFilas + 1).toString();

    // Muestra un mensaje de éxito
    this.toastr.success('Datos Guardados!', 'Registrar Docente', { timeOut: 2000 });
    // Actualiza el contador de filas después de eliminar
    setTimeout(() => {
      this.contarFilasTabla();
    }, 0);
  }
  // Si el formulario no es válido, mostrar mensajes de error para campos vacíos
    else { 
      const controlNames = Object.keys(this.formEncargado.controls);
      for (const controlName of controlNames) {
        const control = this.formEncargado.get(controlName);
        if (control && control.invalid) {
          this.toastr.error(`El campo ${controlName} es obligatorio.`, 'Error', { timeOut: 2000 });
        }
      }
    }   
}
  /*----------------------------------- LIMPIAR -----------------------------------*/
  LimpiarFormEncargado(): void{
    this.formEncargado.reset();
    // this.formEncargado.get('IDEncargado').disable(); // Asegurarse de que el IDEncargado quede deshabilitado
    this.toastr.success('Formulario!', 'Limpio', { timeOut: 2000 }); 
  }
  

  /*-------------------------FUNCIÓN PARA SOLO PERMITIR NUMEROS/*-------------------------*/
  onKeyPress(event: KeyboardEvent) {
    // Verificar si la tecla presionada es un número (0-9)
    const charCode = event.which || event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Evitar que se ingrese la tecla no numérica
    } else {
      console.log('Debe ingresar solo números.')
    }
  }
  /*--------------------------------------- EDITAR (BOTÓN)  -----------------------------------------------*/
  /*--------------------------------------- EDITAR (BOTÓN) -----------------------------------------------*/
// Función para editar encargados
EditarEncargados() {
//   if (this.formEncargado.valid) {
//     const idEncargado = this.formEncargado.get('IDEncargado').value;

//     // Encuentra el encargado en listaEncargado que coincide con el IDEncargado
//     const encargadoIndex = this.listaEncargado.findIndex(encargado => encargado.IDEncargado === idEncargado);

//     if (encargadoIndex !== -1) {
//       // Actualiza los datos del encargado en listaEncargado con los datos del formulario
//       this.listaEncargado[encargadoIndex] = {
//         Identidad: this.formEncargado.get('Identidad').value,
//         NombreDelEncargado: this.formEncargado.get('NombreDelEncargado').value,
//         IDEncargado: idEncargado,
//         Parentesco: this.formEncargado.get('Parentesco').value,
//         Profesion: this.formEncargado.get('Profesion').value,
//         Genero: this.formEncargado.get('Genero').value,
//         Celular: this.formEncargado.get('Celular').value,
//         Telefono: this.formEncargado.get('Telefono').value,
//         Correo: this.formEncargado.get('Correo').value,
//         Direccion: this.formEncargado.get('Direccion').value,
//         Observacion: this.formEncargado.get('Observacion').value,
//       };

//       // Realiza cualquier otra lógica necesaria, como guardar los datos actualizados en el servidor.

//       // Limpia el formulario después de editar
//       this.LimpiarFormEncargado();
//     } else {
//       // Si no se encuentra un encargado con el IDEncargado, muestra un mensaje de error o realiza alguna acción adecuada.
//       this.toastr.error('No se encontró un encargado con el IDEncargado especificado.', 'Error', { timeOut: 2000 });
//     }
//   } else {
//     // Si el formulario no es válido, muestra mensajes de error para campos vacíos
//     this.toastr.error('Por favor, complete todos los campos obligatorios.', 'Error', { timeOut: 2000 });
//   }
}
/*--------------------------------------- EDITAR (TABLA) -----------------------------------------------*/
editarEncargado(i: number) {
  // Obtener el encargado seleccionado usando el índice
  const encargado = this.listaEncargado[i];

  // Rellenar los campos del formulario con los datos del encargado
  this.formEncargado.patchValue({
    Identidad: encargado.Identidad,
    NombreDelEncargado: encargado.NombreDelEncargado,
    IDEncargado: encargado.IDEncargado,
    Parentesco: encargado.Parentesco,
    Profesion: encargado.Profesion,
    Genero: encargado.Genero,
    Celular: encargado.Celular,
    Telefono: encargado.Telefono,
    Correo: encargado.Correo,
    Direccion: encargado.Direccion,
    Observacion: encargado.Observacion,
  });

  // // Asegurarse de que el IDEncargado quede deshabilitado
  // this.formEncargado.get('IDEncargado').disable();
}

/*------------------------ELIMINAR----------------------------------------------------------*/
eliminarEncargado(index: number) {
  // Elimina el encargado en el índice proporcionado
  this.listaEncargado.splice(index, 1);
  this.toastr.success('Datos del Encargado.', 'Borrado', { timeOut: 2000 });
  // Actualiza el contador de filas después de eliminar
    setTimeout(() => {
      this.contarFilasTabla();
    }, 0);
}
  /*------------------------------- CONTADOR DE FILAS DE LA TABLA ---------------------------------------*/

  ngAfterViewInit(): void {
    /*Utilice ngAfterViewInit para obtener una referencia a la tabla HTML y contar las filas en ella después de que la vista se ha renderizado. 
    Esto garantiza que la tabla esté disponible en el DOM antes de que intentes acceder a ella.*/
    this.contarFilasTabla();
  }

  contarFilasTabla(): void {
  // Obtén la referencia a la tabla por su id
  const miTabla = document.getElementById("miTabla");

  if (miTabla) {
    // Obtén todas las filas de la tabla
    const filas = miTabla.getElementsByTagName("tr");
    // Muestra la cantidad de filas
    this.contadorEncargados = filas.length - 1; // Resta 1 para excluir la fila de encabezado
  } else {
    // Si la tabla no existe, actualiza el contador usando la longitud de listaEncargado
    this.contadorEncargados = this.listaEncargado.length;
  }
  }
}