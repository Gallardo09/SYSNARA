import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {
  @ViewChild('miTabla') miTabla: ElementRef | undefined;
//Ejemplo DATOS INICIALIDADOS
Identidad: string = "0502199400950";
NombreDelEncargado: string = "JUAN ANGEL RAMOS PEREZ";
IDEncargado: string = "1";
Parentesco: string = "PADRE";
Celular: string = "97824536";
Telefono: string = "25256969";
Correo: string = "juanangel@gmail.com";
Direccion: string = "CHOLOMA, CORTÉS";
Observacion: string = "NINGUNA";
/*Declaración de Propiedades*/
// Identidad?: string;
// NombreDelEncargado?: string;
// IDEncargado?: string;
// Parentesco?: string;
// Celular?: string;
// Telefono?: string;
// Correo?: string;
// Direccion?: string;
// Observacion?: string;
totalfilas?: string; // Inicialmente, el total de filas es 0
/*registroencargados: any; /*Propiedad para egragar valores a la tabla.*/
contadorFilas: number = 0; /*Contador de las filas en la tabla*/
contadorEstudiantesMatriculados: number = 0; //Cuenta la cantidad de registros en la tabla.
contadorNinas: number = 0; //Cuenta la cantidad de niñas matriculadas en la tabla.
contadorVarones: number = 0; //Cuenta la cantidad de varones en la tabla.
contadorPrimerIngreso: number = 0; //Cuenta la cantidad de estudiantes de Primer Ingreso en la tabla.
contadorReingreso: number = 0; //Cuenta la cantidad de estudiantes de Reingreso en la tabla.

listaMatriculados: any[] = [ /*Listas en la table*/
{
  //#1 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '1', IdentidadEstudiante:'0502200512345', NombreDelEstudiante: 'LUISA LANE RAMOS RAPALO', GeneroEstudiante:'FEMENINO', Edad: '15', fechaNacimiento:'2005-10-26', LugarNacimiento:'SAN PEDRO SULA', CelularEstudiante:'98969591', TelefonoEstudiante:'25261444', CorreoEstudiante:'luisalane@gmail.com', 
  CodigoIMV:'IMV-00-1', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'A+', IDGrado:'7MO-A-23', Grado:'SÉPTIMO', Seccion:'A', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'3', EstadoMatricula:'REINGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'0502199202352', NombreDelEncargado:'HECTOR BONIFACIO LEMUS RODAS', IDEncargado:'6', Parentesco:'PADRE',
  Celular:'99857425',Telefono:'25652525',Direccion:'RES. SAN CARLOS, CHOLOMA',Observacion:'NINGUNA' 
},
{
  //#2 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '2', IdentidadEstudiante:'0502200612253', NombreDelEstudiante: 'EMMA CAROLINA LANZA ARRIGA', GeneroEstudiante:'FEMENINO', Edad: '15', fechaNacimiento:'2006-10-18', LugarNacimiento:'SAN PEDRO SULA', CelularEstudiante:'88586969', TelefonoEstudiante:'25261444', CorreoEstudiante:'arriaga@gmail.com', 
  CodigoIMV:'IMV-00-2', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'O+', IDGrado:'7MO-A-23', Grado:'SÉPTIMO', Seccion:'A', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'3', EstadoMatricula:'REINGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'0501198852525', NombreDelEncargado:'FANNY BENJAMINA GUILLE LOPEZ', IDEncargado:'2', Parentesco:'MADRE',
  Celular:'99857425',Telefono:'25652525',Direccion:'RES. MONTERREY, CHOLOMA',Observacion:'NINGUNA' 
},
{
  //#3 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '3', IdentidadEstudiante:'0101200400523', NombreDelEstudiante: 'BRAYAN OCTAVIO OCONNER CRUZ', GeneroEstudiante:'MASCULINO', Edad: '16', fechaNacimiento:'2005-10-15', LugarNacimiento:'ATLANTIDA', CelularEstudiante:'96966969', TelefonoEstudiante:'26252425', CorreoEstudiante:'cruz@gmail.com', 
  CodigoIMV:'IMV-00-3', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'A+', IDGrado:'7MO-A-23', Grado:'SÉPTIMO', Seccion:'A', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'2', EstadoMatricula:'PRIMER INGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'1801199612345', NombreDelEncargado:'KARLA PATRICIA JUAREZ HERCULES', IDEncargado:'3', Parentesco:'ABUELO(A)',
  Celular:'99857425',Telefono:'25652525',Direccion:'RES. LAS FUENTES, CHOLOMA',Observacion:'NINGUNA' 
},
{ 
  //#4 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '4', IdentidadEstudiante:'1801200665432', NombreDelEstudiante: 'DAVID JOSUE VACA TORO', GeneroEstudiante:'MASCULINO', Edad: '16', fechaNacimiento:'2005-10-15', LugarNacimiento:'YORO', CelularEstudiante:'99995522', TelefonoEstudiante:'22223636', CorreoEstudiante:'vacatoro@gmail.com', 
  CodigoIMV:'IMV-00-4', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'A+', IDGrado:'7MO-B-23', Grado:'SÉPTIMO', Seccion:'B', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'2', EstadoMatricula:'PRIMER INGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'1801199425365', NombreDelEncargado:'FERNANDO DE LA O AMAYA', IDEncargado:'4', Parentesco:'PADRE',
  Celular:'88999988',Telefono:'25562525',Direccion:'RES. LAS FUENTES, CHOLOMA',Observacion:'NINGUNA' 
},
];

ngOnInit(): void { //ngOnInit() se ejecuta antes de que las vistas del componente hayan sido inicializadas
// Establece el valor del contador de filas en el campo ID Docente
this.totalfilas = (this.contadorFilas + 1).toString();
this.contarFilasTabla();
this.contadorNinas = 0;

}

/*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
formMatricula: FormGroup;
constructor(private fb: FormBuilder, private toastr: ToastrService) {
this.formMatricula = this.fb.group({
    /*DATOS DEL ESTUDIANTE*/
    selectedYear: ['', [Validators.required]],
    IDMatricula: [{ value: '', disabled: true }, [Validators.required]],
    IdentidadEstudiante: ['', [Validators.required]],
    NombreDelEstudiante: ['', [Validators.required]],
    Edad: ['', [Validators.required]],
    GeneroEstudiante: ['', [Validators.required]],
    fechaNacimiento: ['', [Validators.required]],
    CorreoEstudiante: ['', [Validators.required]],
    LugarNacimiento: ['', [Validators.required]],
    CelularEstudiante: ['', [Validators.required]],
    TelefonoEstudiante: ['', [Validators.required]],
    CodigoIMV: [{ value: '', disabled: true }, [Validators.required]],
    Nacionalidad: ['', [Validators.required]],
    TipoSangre: ['', [Validators.required]],
    IDGrado: ['', [Validators.required]],
    Grado: ['', [Validators.required]],
    Seccion: ['', [Validators.required]],
    Jornada: ['', [Validators.required]],
    Modalidad: ['', [Validators.required]],
    LugarProviene: ['', [Validators.required]],
    Becado: ['', [Validators.required]],
    Repitente: ['', [Validators.required]],
    Alergias: ['', [Validators.required]],
    VacunasCovid: ['', [Validators.required]],
    EstadoMatricula: ['', [Validators.required]],
    fechaIngreso: ['', [Validators.required]],
    Estado: ['', [Validators.required]],
    DireccionEstudiante: ['', [Validators.required]],
    ObservacionEstudiante: ['', [Validators.required]],
  /*DATOS DEL PADRE*/  
  Identidad: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern("[0-9]+")]],
  NombreDelEncargado: [{value: '', disabled: true }, [Validators.required]],
  IDEncargado: [{ value: '', disabled: true }, [Validators.required]],
  Parentesco: [{value: '', disabled: true }, [Validators.required]],
  Profesion: [{value: '', disabled: true }, [Validators.required]],
  Celular: [{value: '', disabled: true }, [Validators.required]],
  Telefono: [{value: '', disabled: true }, [Validators.required]],
  Direccion: [{value: '', disabled: true }, [Validators.required]],
  
  /*Matricula FORM*/
  contadorEstudiantesMatriculados: [{ value: 0, disabled: true }, [Validators.required]],
  contadorNinas: [{ value: 0, disabled: true }, [Validators.required]],
  contadorVarones: [{ value: 0, disabled: true }, [Validators.required]],
  contadorPrimerIngreso: [{ value: 0, disabled: true }, [Validators.required]],
  contadorReingreso: [{ value: 0, disabled: true }, [Validators.required]],
  
});
}
/*----------------------------------- GUARDAR -----------------------------------*/
Matricular(): void {
  //Obtengo el ID Encargado para verificar la existencia
  const IDMatriculaGuardar = this.IDMatricula;

  //Busca la matricula en la lista por su IDMatricula 
  const MatriculaExistenteGuardar = this.listaMatriculados.find(matricula => matricula.IDMatricula === IDMatriculaGuardar); 
  if(MatriculaExistenteGuardar)
  {
    // La Matricula no existe en la lista, muestra un mensaje de error o realiza la lógica necesaria
    this.toastr.error('La matricula con ID ' + IDMatriculaGuardar + ' ya existe en la lista.', 'Advertencia', { timeOut: 2000 });
  } else {
    console.log(this.formMatricula);
    if (this.formMatricula.valid) {
      const listaMatriculados: any = {
        //Agregar Datos del Alumno a la tabla
        selectedYear:this.formMatricula.get('selectedYear')?.value,
        IdentidadEstudiante:this.formMatricula.get('IdentidadEstudiante')?.value,
        NombreDelEstudiante:this.formMatricula.get('NombreDelEstudiante')?.value, 
        CodigoIMV:this.formMatricula.get('CodigoIMV')?.value,
        IDMatricula:this.formMatricula.get('IDMatricula')?.value,
        Nacionalidad:this.formMatricula.get('Nacionalidad')?.value,
        fechaNacimiento:this.formMatricula.get('fechaNacimiento')?.value,
        Edad:this.formMatricula.get('Edad')?.value,
        GeneroEstudiante:this.formMatricula.get('GeneroEstudiante')?.value,
        CorreoEstudiante:this.formMatricula.get('CorreoEstudiante')?.value,
        LugarNacimiento:this.formMatricula.get('LugarNacimiento')?.value,
        CelularEstudiante:this.formMatricula.get('CelularEstudiante')?.value,
        TelefonoEstudiante:this.formMatricula.get('TelefonoEstudiante')?.value,
        TipoSangre:this.formMatricula.get('TipoSangre')?.value,
        DireccionEstudiante:this.formMatricula.get('DireccionEstudiante')?.value,
        ObservacionEstudiante:this.formMatricula.get('ObservacionEstudiante')?.value,
        IDGrado:this.formMatricula.get('IDGrado')?.value,
        Grado:this.formMatricula.get('Grado')?.value,
        Seccion:this.formMatricula.get('Seccion')?.value,
        Jornada:this.formMatricula.get('Jornada')?.value,
        Modalidad:this.formMatricula.get('Modalidad')?.value,
        LugarProviene:this.formMatricula.get('LugarProviene')?.value,
        Becado:this.formMatricula.get('Becado')?.value,
        Repitente:this.formMatricula.get('Repitente')?.value,
        Alergias:this.formMatricula.get('Alergias')?.value,
        VacunasCovid:this.formMatricula.get('VacunasCovid')?.value,
        EstadoMatricula:this.formMatricula.get('EstadoMatricula')?.value,
        fechaIngreso:this.formMatricula.get('fechaIngreso')?.value,
        Estado:this.formMatricula.get('Estado')?.value,
        //Agregar Datos del Padre a la Tabla
        Identidad: this.formMatricula.get('Identidad')?.value,
        NombreDelEncargado: this.formMatricula.get('NombreDelEncargado')?.value,
        IDEncargado: this.formMatricula.get('IDEncargado')?.value,
        Parentesco: this.formMatricula.get('Parentesco')?.value,
        Celular: this.formMatricula.get('Celular')?.value,
        Telefono: this.formMatricula.get('Telefono')?.value,
        Direccion: this.formMatricula.get('Direccion')?.value,
        Observacion: this.formMatricula.get('Observacion')?.value,
  }
  // Agrega los datos a la lista
  this.listaMatriculados.unshift(listaMatriculados);

  // Limpia el formulario
  this.formMatricula.reset();

  this.contadorFilas++; //Aumento en el acumulador contador
  this.totalfilas = (this.contadorFilas + 1).toString();

  // Muestra un mensaje de éxito
  this.toastr.success('Datos Guardados!', 'Registrar Estudiante', { timeOut: 2000 });
  // Actualiza el contador de filas después de eliminar
  setTimeout(() => {
    this.contarFilasTabla();
  }, 0);
  }  // Si el formulario no es válido, mostrar mensajes de error para campos vacíos
  else {
    const controlNames = Object.keys(this.formMatricula.controls);
    for (const controlName of controlNames) {
      const control = this.formMatricula.get(controlName);
      if (control && control.invalid) {
        this.toastr.error(`El campo ${controlName} es obligatorio.`, 'Error', { timeOut: 2000 });
      }
    }
  }
}

}
/*----------------------------------- LIMPIAR -----------------------------------*/
LimpiarFormMatricula(): void{
  this.formMatricula.reset();
    // Restablece la lista 'MatriculaEstudiantil' a su valor original
this.listaMatriculados = [
  {
  //#1 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '1', IdentidadEstudiante:'0502200512345', NombreDelEstudiante: 'LUISA LANE RAMOS RAPALO', GeneroEstudiante:'FEMENINO', Edad: '15', fechaNacimiento:'2005-09-26', LugarNacimiento:'SAN PEDRO SULA', CelularEstudiante:'98969591', TelefonoEstudiante:'25261444', CorreoEstudiante:'luisalane@gmail.com', 
  CodigoIMV:'IMV-00-1', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'A+', IDGrado:'7MO-A-23', Grado:'SÉPTIMO', Seccion:'A', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'3', EstadoMatricula:'REINGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'0502199202352', NombreDelEncargado:'HECTOR BONIFACIO LEMUS RODAS', IDEncargado:'6', Parentesco:'PADRE',
  Celular:'99857425',Telefono:'25652525',Direccion:'RES. SAN CARLOS, CHOLOMA',Observacion:'NINGUNA' 
},
{
  //#2 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '2', IdentidadEstudiante:'0502200612253', NombreDelEstudiante: 'EMMA CAROLINA LANZA ARRIGA', GeneroEstudiante:'FEMENINO', Edad: '15', fechaNacimiento:'2006-02-25', LugarNacimiento:'SAN PEDRO SULA', CelularEstudiante:'88586969', TelefonoEstudiante:'25261444', CorreoEstudiante:'arriaga@gmail.com', 
  CodigoIMV:'IMV-00-2', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'O+', IDGrado:'7MO-A-23', Grado:'SÉPTIMO', Seccion:'A', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'3', EstadoMatricula:'REINGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'0501198852525', NombreDelEncargado:'FANNY BENJAMINA GUILLE LOPEZ', IDEncargado:'2', Parentesco:'MADRE',
  Celular:'99857425',Telefono:'25652525',Direccion:'RES. MONTERREY, CHOLOMA',Observacion:'NINGUNA' 
},
{
  //#3 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '3', IdentidadEstudiante:'0101200400523', NombreDelEstudiante: 'BRAYAN OCTAVIO OCONNER CRUZ', GeneroEstudiante:'MASCULINO', Edad: '16', fechaNacimiento:'2006-02-09', LugarNacimiento:'ATLANTIDA', CelularEstudiante:'96966969', TelefonoEstudiante:'26252425', CorreoEstudiante:'cruz@gmail.com', 
  CodigoIMV:'IMV-00-3', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'A+', IDGrado:'7MO-A-23', Grado:'SÉPTIMO', Seccion:'A', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'2', EstadoMatricula:'PRIMER INGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'1801199612345', NombreDelEncargado:'KARLA PATRICIA JUAREZ HERCULES', IDEncargado:'3', Parentesco:'ABUELO(A)',
  Celular:'99857425',Telefono:'25652525',Direccion:'RES. LAS FUENTES, CHOLOMA',Observacion:'NINGUNA' 
},
{ 
  //#4 Datos Estudiantes
  selectedYear: '2023', IDMatricula: '4', IdentidadEstudiante:'1801200665432', NombreDelEstudiante: 'DAVID JOSUE VACA TORO', GeneroEstudiante:'MASCULINO', Edad: '16', fechaNacimiento:'2006-11-15', LugarNacimiento:'YORO', CelularEstudiante:'99995522', TelefonoEstudiante:'22223636', CorreoEstudiante:'vacatoro@gmail.com', 
  CodigoIMV:'IMV-00-4', Nacionalidad:'HONDUREÑO(A)', TipoSangre:'A+', IDGrado:'7MO-B-23', Grado:'SÉPTIMO', Seccion:'B', Jornada:'MATUTINA', Modalidad:'III CICLO DE EDUCACIÓN BÁSICA', LugarProviene:'INSTITUTO JUAN LINDO DE ULUA', Becado:'SIN BECA', Repitente:'NO', Alergias:'NO', VacunasCovid:'2', EstadoMatricula:'PRIMER INGRESO', fechaIngreso:'23-11-2023', Estado: 'ACTIVO',
  DireccionEstudiante:'CHOLOMA, CORTÉS', ObservacionEstudiante:'NINGUNA',
  //Datos del padre
  Identidad:'1801199425365', NombreDelEncargado:'FERNANDO DE LA O AMAYA', IDEncargado:'4', Parentesco:'PADRE',
  Celular:'88999988',Telefono:'25562525',Direccion:'RES. LAS FUENTES, CHOLOMA',Observacion:'NINGUNA' 
},
];
  // Actualiza el contador de filas después de eliminar
  setTimeout(() => {
    this.contarFilasTabla();
  }, 0);
// this.formMatricula.get('IDEncargado').disable(); // Asegurarse de que el IDEncargado quede deshabilitado
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

/*--------------------------------------- EDITAR (TABLA) -----------------------------------------------*/
editarEncargado(i: number) {
// Obtener la Matricula seleccionado usando el índice
const matricula = this.listaMatriculados[i];

// Rellenar los campos del formulario con los datos de la Matricula
this.formMatricula.patchValue({
  Identidad: matricula.Identidad,
  NombreDelEncargado: matricula.NombreDelEncargado,
  IDEncargado: matricula.IDEncargado,
  Parentesco: matricula.Parentesco,
  Celular: matricula.Celular,
  Telefono: matricula.Telefono,
  Correo: matricula.Correo,
  Direccion: matricula.Direccion,
  Observacion: matricula.Observacion,
});

}

/*------------------------ELIMINAR----------------------------------------------------------*/
eliminarEncargado(index: number) {
// Elimina la matricula en el índice proporcionado
this.listaMatriculados.splice(index, 1);
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
  console.log('Entrando a contarFilasTabla');
  this.contadorEstudiantesMatriculados = 0;
  this.contadorNinas = 0;
  this.contadorVarones = 0;
  this.contadorPrimerIngreso = 0;
  this.contadorReingreso = 0;

  if (this.miTabla && this.miTabla.nativeElement) {
    const filas = this.miTabla.nativeElement.getElementsByTagName('tr');
    console.log('Número de filas:', filas.length - 1);
    this.contadorEstudiantesMatriculados = filas.length - 1;

    for (let i = 1; i < filas.length; i++) {
      const generoColumnIndex = 4; // Índice de la columna "Género" (empezando desde 0)
      const estadoMatriculaColumnIndex = 25; // Índice de la columna "EstadoMatricula" (empezando desde 0)

      const genero = filas[i].getElementsByTagName('td')[generoColumnIndex].innerText;
      const estadoMatricula = filas[i].getElementsByTagName('td')[estadoMatriculaColumnIndex].innerText;

      // Contar la columna "Género"
      if (genero.trim().toUpperCase() === 'FEMENINO') {
        this.contadorNinas++;
      } else if (genero.trim().toUpperCase() === 'MASCULINO') {
        this.contadorVarones++;
      }

      // Contar la columna "EstadoMatricula"
      if (estadoMatricula.trim().toUpperCase() === 'PRIMER INGRESO') {
        this.contadorPrimerIngreso++;
      } else if (estadoMatricula.trim().toUpperCase() === 'REINGRESO') {
        this.contadorReingreso++;
      }
    }

    console.log('Número de niñas:', this.contadorNinas);
    console.log('Número de varones:', this.contadorVarones);
    console.log('Número de primer ingreso:', this.contadorPrimerIngreso);
    console.log('Número de reingreso:', this.contadorReingreso);
  } else {
    console.log('No se encontró la tabla. Usando la longitud de la lista.');
    this.contadorEstudiantesMatriculados = this.listaMatriculados.length;

    // Contar en listaMatriculados
    this.contadorNinas = this.listaMatriculados.filter(matricula => matricula.GeneroEstudiante.trim().toUpperCase() === 'FEMENINO').length;
    this.contadorVarones = this.listaMatriculados.filter(matricula => matricula.GeneroEstudiante.trim().toUpperCase() === 'MASCULINO').length;
    this.contadorPrimerIngreso = this.listaMatriculados.filter(matricula => matricula.EstadoMatricula.trim().toUpperCase() === 'PRIMER INGRESO').length;
    this.contadorReingreso = this.listaMatriculados.filter(matricula => matricula.EstadoMatricula.trim().toUpperCase() === 'REINGRESO').length;
  }

  console.log('Salida de contarFilasTabla. Contador de estudiantes matriculados:', this.contadorEstudiantesMatriculados);
  console.log('Salida de contarFilasTabla. Contador de niñas:', this.contadorNinas);
  console.log('Salida de contarFilasTabla. Contador de varones:', this.contadorVarones);
  console.log('Salida de contarFilasTabla. Contador de primer ingreso:', this.contadorPrimerIngreso);
  console.log('Salida de contarFilasTabla. Contador de reingreso:', this.contadorReingreso);
}




/*------------------------------- BUSCAR ENCARGADO ---------------------------------------*/
BuscarEncargado() {
  // Obtén el valor de identidad del formulario
  const identidadABuscar = this.Identidad;

  // Filtra la lista de la matricula y almacena los coincidentes en una nueva lista
  const MatriculaFiltrados = this.listaMatriculados.filter(matricula => matricula.Identidad === identidadABuscar);

  // Actualiza this.listaMatriculados con los datos coincidentes
  this.listaMatriculados = MatriculaFiltrados;
}  
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////// MATRICULA DEL ESTUDIANTE ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//Propiedades en Matricula
selectedYear: string = "2023";
IdentidadEstudiante: string="0502200500123";
NombreDelEstudiante: string="LUIS ANGEL PEREZ GOMEZ";
CodigoIMV: string="IMV-00-6";
IDMatricula: string="6";
Nacionalidad: string="HONDUREÑO(A)";
fechaNacimiento: Date = new Date(1994, 10, 23);
Edad?: number;
GeneroEstudiante: string="MASCULINO";
CorreoEstudiante: string="luisangel@gmail.com";
LugarNacimiento: string="SAN PEDRO SULA";
CelularEstudiante: string="99885599";
TelefonoEstudiante: string="22225522";
TipoSangre: string = "A+";
DireccionEstudiante: string="RES. SAN CARLOS, CHOLOMA";
ObservacionEstudiante: string="NINGUNA";
IDGrado: string="7MO-A-23";
Grado: string="SÉPTIMO";
Seccion: string="A";
Jornada: string="MATUTINA";
Modalidad: string="III CICLO DE EDUCACIÓN BÁSICA";
LugarProviene: string="ESCUELA DE AGRICULTURA DEL VALLE DE SULA";
Becado: string="SIN BECA";
Repitente: string="NO";
Alergias: string="NO";
VacunasCovid: string="3";
EstadoMatricula: string="REINGRESO";
fechaIngreso: Date = new Date(2023, 10, 23);
Estado: string="ACTIVO";
edad?: number;
IDMatriculaForm?: string; //EliminarMatricula

BuscarEstudiante(){

}

ReportesMatricula(){

}

///////////////////////////////////////////////////////////////////////////////////////
////////////////////////// SELECCIONAR FINAL ///////////////////////////////////

filaSeleccionada: string | null = null;

// Método para seleccionar la fila
seleccionarFila(idMatricula: string): void {
     // Actualiza la fila seleccionada
     this.filaSeleccionada = this.filaSeleccionada === idMatricula ? null : idMatricula;

     // Encuentra el objeto de matrícula correspondiente al ID seleccionado
     const matriculaSeleccionada = this.listaMatriculados.find(matricula => matricula.IDMatricula === this.filaSeleccionada);
 
     if (matriculaSeleccionada) {
       // Utiliza el FormBuilder para actualizar los valores del formulario con los datos de la matrícula
       this.formMatricula.patchValue({
        IdentidadEstudiante: matriculaSeleccionada.IdentidadEstudiante,
        NombreDelEstudiante: matriculaSeleccionada.NombreDelEstudiante,
        GeneroEstudiante: matriculaSeleccionada.GeneroEstudiante,
        Edad: matriculaSeleccionada.Edad,
        fechaNacimiento: matriculaSeleccionada.fechaNacimiento,
        LugarNacimiento: matriculaSeleccionada.LugarNacimiento,
        CelularEstudiante: matriculaSeleccionada.CelularEstudiante,
        TelefonoEstudiante: matriculaSeleccionada.TelefonoEstudiante,
        CorreoEstudiante: matriculaSeleccionada.CorreoEstudiante,
        CodigoIMV: matriculaSeleccionada.CodigoIMV,
        Nacionalidad: matriculaSeleccionada.Nacionalidad,
        TipoSangre: matriculaSeleccionada.TipoSangre,
        IDGrado: matriculaSeleccionada.IDGrado,
        Grado: matriculaSeleccionada.Grado,
        Seccion: matriculaSeleccionada.Seccion,
        Jornada: matriculaSeleccionada.Jornada,
        Modalidad: matriculaSeleccionada.Modalidad,
        LugarProviene: matriculaSeleccionada.LugarProviene,
        Becado: matriculaSeleccionada.Becado,
        Repitente: matriculaSeleccionada.Repitente,
        Alergias: matriculaSeleccionada.Alergias,
        VacunasCovid: matriculaSeleccionada.VacunasCovid,
        EstadoMatricula: matriculaSeleccionada.EstadoMatricula,
        fechaIngreso: matriculaSeleccionada.fechaIngreso,
        Estado: matriculaSeleccionada.Estado,
        DireccionEstudiante: matriculaSeleccionada.DireccionEstudiante,
        ObservacionEstudiante: matriculaSeleccionada.ObservacionEstudiante,

        // Datos del padre o encargado
        Identidad: matriculaSeleccionada.Identidad,
        NombreDelEncargado: matriculaSeleccionada.NombreDelEncargado,
        IDEncargado: matriculaSeleccionada.IDEncargado,
        Parentesco: matriculaSeleccionada.Parentesco,
        Celular: matriculaSeleccionada.Celular,
        Telefono: matriculaSeleccionada.Telefono,
        Direccion: matriculaSeleccionada.Direccion,
        Observacion: matriculaSeleccionada.Observacion,
       });
  }
}
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////// CALCULAR LA EDAD ///////////////////////////////////
calcularEdad() {
  const fechaNacimientoString = this.fechaNacimiento;

  if (fechaNacimientoString) {
    const fechaNacimiento = new Date(fechaNacimientoString);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (hoy.getMonth() < fechaNacimiento.getMonth() ||
        (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
      this.Edad = edad - 1;
    } else {
      this.Edad = edad;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*--------------------------------------- ELIMINAR MATRICULA (BOTÓN)  -----------------------------------------------*/

// Esta función se llama cuando se hace clic en el botón "Eliminar"
EliminarMatricula(): void {

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*--------------------------------------- EDITAR (BOTÓN)  -----------------------------------------------*/
  // Función para editar matrícula
  // EditarMatricula() {
  //   // Obtén el índice de la fila seleccionada
  //   const index = this.listaMatriculados.findIndex(matricula => matricula.IDMatricula === this.filaSeleccionada);
  
  //   if (index !== -1) {
  //     // Obtén los valores del formulario
  //     const matriculaEditada = this.formMatricula.value;
  
  //     // Guarda los valores originales de IDMatricula y CodigoIMV
  //     const idMatriculaOriginal = this.listaMatriculados[index].IDMatricula;
  //     const codigoIMVOriginal = this.listaMatriculados[index].CodigoIMV;
  
  //     // Actualiza todos los campos excepto IDMatricula y CodigoIMV
  //     this.listaMatriculados[index] = { ...matriculaEditada, IDMatricula: idMatriculaOriginal, CodigoIMV: codigoIMVOriginal };
  
  //     console.log('Matrícula con ID ' + this.filaSeleccionada + ' editada correctamente.');
  //     this.toastr.success('Datos de matrícula editados correctamente.', 'Aviso', { timeOut: 2000 });
  //   } else {
  //     console.log('No se encontró la matrícula con ID ' + this.filaSeleccionada);
  //     this.toastr.error('Primero seleccione en la tabla el elemento a editar.', 'Advertencia', { timeOut: 2000 });
  //   }
  
  // // Actualiza el contador de filas después de eliminar
  // setTimeout(() => {
  //   this.contarFilasTabla();
  // }, 0);
  // }
  EditarMatricula() {
    // Obtén el índice de la fila seleccionada
    const index = this.listaMatriculados.findIndex(matricula => matricula.IDMatricula === this.filaSeleccionada);
  
    if (index !== -1) {
      // Obtén los valores del formulario
      const matriculaEditada = this.formMatricula.value;
  
      console.log('Valores del formulario:', matriculaEditada);
  
      // Guarda los valores originales de IDMatricula y CodigoIMV
      const idMatriculaOriginal = this.listaMatriculados[index].IDMatricula;
      const codigoIMVOriginal = this.listaMatriculados[index].CodigoIMV;
      const NombreDelEncargadoOriginal = this.listaMatriculados[index].NombreDelEncargado;
      const IDEncargadoOriginal = this.listaMatriculados[index].IDEncargado;
      const ParentescoOriginal = this.listaMatriculados[index].Parentesco;
      const CelularOriginal = this.listaMatriculados[index].Celular;
      const TelefonoOriginal = this.listaMatriculados[index].Telefono;
      const DireccionOriginal = this.listaMatriculados[index].Direccion;
      const ObservacionOriginal = this.listaMatriculados[index].Observacion;
      // Actualiza todos los campos excepto IDMatricula y CodigoIMV
      this.listaMatriculados[index] = {
        ...matriculaEditada,
        IDMatricula: idMatriculaOriginal,
        CodigoIMV: codigoIMVOriginal,
        NombreDelEncargado: NombreDelEncargadoOriginal,
        IDEncargadoOriginal: this.IDEncargado,
        ParentescoOriginal: this.Parentesco,
        CelularOriginal: this.Celular,
        TelefonoOriginal: this.Telefono,
        DireccionOriginal: this.Direccion,
        ObservacionOriginal: this.Observacion,
      };
  
      console.log('Matrícula con ID ' + this.filaSeleccionada + ' editada correctamente.');
      this.toastr.success('Datos de matrícula editados correctamente.', 'Aviso', { timeOut: 2000 });
    } else {
      console.log('No se encontró la matrícula con ID ' + this.filaSeleccionada);
      this.toastr.error('Primero seleccione en la tabla el elemento a editar.', 'Advertencia', { timeOut: 2000 });
    }
  
    // Actualiza el contador de filas después de eliminar
    setTimeout(() => {
      this.contarFilasTabla();
    }, 0);
  }
  
  
} //Fin export class 