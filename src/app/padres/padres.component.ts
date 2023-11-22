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
  {Identidad: '0502200300123', NombreDelEncargado: 'LUIS PEDRO ALVARADO CRUZ', IDEncargado: '2', Parentesco: 'PADRE', Profesion: 'SOLDADOR', Genero: 'MASCULINO', Celular: '99884455', Telefono: '25253636', Correo: 'luisalvarado@gmail.com', Direccion: 'LA SAN CARLOS, CORTÉS', Observacion: 'NINGUNA'},
  {Identidad: '0502199400523', NombreDelEncargado: 'JUAN ANGEL PEREZ GOMEZ', IDEncargado: '3', Parentesco: 'HERMANO(A)', Profesion: 'OPERARIO', Genero: 'MASCULINO', Celular: '97824537', Telefono: '25253636', Correo: 'juanpererz@gmail.com', Direccion: 'CHOLOMA, CORTÉS', Observacion: 'NINGUNA'},
  {Identidad: '0502200695236', NombreDelEncargado: 'KARLA MELISSA RODAS LOPEZ', IDEncargado: '4', Parentesco: 'MADRE', Profesion: 'AMA DE CASA', Genero: 'FEMENINO', Celular: '98989999', Telefono: '26606000', Correo: 'melissa@gmail.com', Direccion: 'CHOLOMA, CORTÉS', Observacion: 'NINGUNA'},
  {Identidad: '0502201036365', NombreDelEncargado: 'JOSE MARVIN TORRES HERNANDEZ', IDEncargado: '5', Parentesco: 'PRIMO(A)', Profesion: 'TÉCNICO', Genero: 'MASCULINO', Celular: '99885566', Telefono: '25555522', Correo: 'marvintorres@gmail.com', Direccion: 'SAN PEDRO SULA, CORTÉS', Observacion: 'NINGUNA'},

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
    //Obtengo el ID Encargado para verificar la existencia
    const IDEncargadoGuardar = this.IDEncargado;
  
    //Busca el encargado en la lista por su IDEncargado 
    const encargadoExistenteGuardar = this.listaEncargado.find(encargado => encargado.IDEncargado === IDEncargadoGuardar); 
    if(encargadoExistenteGuardar)
    {
      // El encargado no existe en la lista, muestra un mensaje de error o realiza la lógica necesaria
      this.toastr.error('El encargado con ID ' + IDEncargadoGuardar + ' ya existe en la lista.', 'Advertencia', { timeOut: 2000 });
    } else {
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
    }  // Si el formulario no es válido, mostrar mensajes de error para campos vacíos
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

}
  /*----------------------------------- LIMPIAR -----------------------------------*/
  LimpiarFormEncargado(): void{
    this.formEncargado.reset();
      // Restablece la lista 'listaEncargado' a su valor original
  this.listaEncargado = [
    { Identidad: '0502199400523', NombreDelEncargado: 'JUAN ANGEL PEREZ GOMEZ', IDEncargado: '1', Parentesco: 'PADRE', Profesion: 'OPERARIO', Genero: 'MASCULINO', Celular: '97824537', Telefono: '25253636', Correo: 'juanpererz@gmail.com', Direccion: 'CHOLOMA, CORTÉS', Observacion: 'NINGUNA' },
    { Identidad: '0502200300123', NombreDelEncargado: 'LUIS PEDRO ALVARADO CRUZ', IDEncargado: '2', Parentesco: 'PADRE', Profesion: 'SOLDADOR', Genero: 'MASCULINO', Celular: '99884455', Telefono: '25253636', Correo: 'luisalvarado@gmail.com', Direccion: 'LA SAN CARLOS, CORTÉS', Observacion: 'NINGUNA' },
    { Identidad: '0502199400523', NombreDelEncargado: 'JUAN ANGEL PEREZ GOMEZ', IDEncargado: '3', Parentesco: 'HERMANO(A)', Profesion: 'OPERARIO', Genero: 'MASCULINO', Celular: '97824537', Telefono: '25253636', Correo: 'juanpererz@gmail.com', Direccion: 'CHOLOMA, CORTÉS', Observacion: 'NINGUNA' },
    { Identidad: '0502200695236', NombreDelEncargado: 'KARLA MELISSA RODAS LOPEZ', IDEncargado: '4', Parentesco: 'MADRE', Profesion: 'AMA DE CASA', Genero: 'FEMENINO', Celular: '98989999', Telefono: '26606000', Correo: 'melissa@gmail.com', Direccion: 'CHOLOMA, CORTÉS', Observacion: 'NINGUNA' },
    { Identidad: '0502201036365', NombreDelEncargado: 'JOSE MARVIN TORRES HERNANDEZ', IDEncargado: '5', Parentesco: 'PRIMO(A)', Profesion: 'TÉCNICO', Genero: 'MASCULINO', Celular: '99885566', Telefono: '25555522', Correo: 'marvintorres@gmail.com', Direccion: 'SAN PEDRO SULA, CORTÉS', Observacion: 'NINGUNA' },
  ];
    // Actualiza el contador de filas después de eliminar
    setTimeout(() => {
      this.contarFilasTabla();
    }, 0);
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
// Función para editar encargados
EditarEncargados() {
  // Obtén el IDEncargado que deseas verificar
  const idEncargadoAEditar = this.IDEncargado;
  // Obtén la Identidad que deseas verificar
  // const IdentidadEditar = this.Identidad;
  // Busca el encargado en la lista por su IDEncargado y su Identidad
  const encargadoExistente = this.listaEncargado.find(encargado => encargado.IDEncargado === idEncargadoAEditar);

  if (encargadoExistente) {
    // Actualiza los valores del encargado con los valores de los campos de entrada
    encargadoExistente.Identidad = this.Identidad;
    encargadoExistente.NombreDelEncargado = this.NombreDelEncargado;
    encargadoExistente.Parentesco = this.Parentesco;
    encargadoExistente.Profesion = this.Profesion;
    encargadoExistente.Genero = this.Genero;
    encargadoExistente.Celular = this.Celular;
    encargadoExistente.Telefono = this.Telefono;
    encargadoExistente.Correo = this.Correo;
    encargadoExistente.Direccion = this.Direccion;
    encargadoExistente.Observacion = this.Observacion;
    console.log('El encargado con ID ' + idEncargadoAEditar + ' ya esta registrado en la lista.');
    this.toastr.success('Datos editados correctamente.', 'Aviso', { timeOut: 2000 });
  } else {
    // El encargado no existe en la lista, muestra un mensaje de error o realiza la lógica necesaria
    console.log('El encargado con ID ' + idEncargadoAEditar + ' no existe en la lista.');
    // El encargado no existe en la lista, muestra un mensaje de error o realiza la lógica necesaria
    this.toastr.error('Primero seleccione en la tabla el elemento a editar.', 'Advertencia', { timeOut: 2000 });
    
  }
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

  /*------------------------------- BUSCAR ENCARGADO ---------------------------------------*/
  BuscarEncargado() {
    // Obtén el valor de identidad del formulario
    const identidadABuscar = this.Identidad;
  
    // Filtra la lista de encargados y almacena los coincidentes en una nueva lista
    const encargadosFiltrados = this.listaEncargado.filter(encargado => encargado.Identidad === identidadABuscar);
  
    // Actualiza this.listaEncargado con los datos coincidentes
    this.listaEncargado = encargadosFiltrados;
  }  
}