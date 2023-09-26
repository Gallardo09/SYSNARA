import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { combineLatest } from 'rxjs';
import { of } from 'rxjs';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
    
  /*DECLARACIÓN DE PROPIEDADES*/
  selectedYear?: string;
  selectedGrado?: string;
  selectedSeccion?: string;
  selectedAsignatura?: string;
  idAsignatura?: string;
  subjects: string[] = [];
  editMode = false;
  autoSizeColumns?: boolean;

  idgrado:string = '';
  jornada:string = '';
  modalidad:string = '';
  sistema:string = '';
  periodo:string = '';
  
  hasSelectedRows = false; // Variable para rastrear si hay filas seleccionadas

  // Define a property to store the grid API instance
  private gridApi: any;
  
  /*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
    formasignaturas: FormGroup;
    constructor(private fb: FormBuilder, private toastr: ToastrService) {
      this.formasignaturas = this.fb.group({
        selectedYear: ['', [Validators.required, Validators.maxLength(9)]], 
        idgrado: ['', [Validators.required]],
        selectedGrado: ['', [Validators.required]],
        selectedSeccion: ['', [Validators.required]],
        jornada: ['', [Validators.required]],
        sistema: ['', [Validators.required]],
        idAsignatura: [{ value: '', disabled: true }, Validators.required], // Corregir aquí
        selectedAsignatura: ['', [Validators.required]],
        periodo: ['', [Validators.required]],
        modalidad: ['', [Validators.required]]
      });      
    }

  /*FUNCIÓN EN EL BOTON AGREGAR*/
    RegistrarAsignatura(): void{
      console.log(this.formasignaturas);
  
      this.toastr.success('Datos Guardados!', 'Regitrar Asignaturas',{ timeOut: 2000 });
      this.formasignaturas.reset();
    }

  /*FUNCIÓN EN EL BOTON AGREGAR*/
  agregarAsignatura(): void {
    const nuevaAsignatura = {
      año: this.formasignaturas.get('selectedYear')?.value,
      idgrado: this.formasignaturas.get('idgrado')?.value,
      grado: this.formasignaturas.get('selectedGrado')?.value,
      seccion: this.formasignaturas.get('selectedSeccion')?.value,
      jornada: this.formasignaturas.get('jornada')?.value,
      sistema: this.formasignaturas.get('sistema')?.value,
      idasignatura: this.formasignaturas.get('idAsignatura')?.value,
      asignatura: this.formasignaturas.get('selectedAsignatura')?.value,
      periodo: this.formasignaturas.get('periodo')?.value,
      modalidad: this.formasignaturas.get('modalidad')?.value
    };
  
  // Add the new assignment to rowData using the gridApi instance
    this.gridApi.applyTransaction({ add: [nuevaAsignatura] });

    // Mostrar mensaje de éxito
    this.toastr.success('Datos Guardados!', 'Registrar Asignatura', { timeOut: 2000 });

    // Resetear el formulario
    // this.formasignaturas.reset();
    this.idAsignatura = '';
    this.selectedAsignatura = '';
  }
  /*DATAGRID*/
onGridReady(params: GridReadyEvent<any, any>) { 
    this.gridApi = params.api;
        // ... Otra lógica que quieras ejecutar cuando la cuadrícula está lista ...
  }
gridOptions: GridOptions = {
      columnDefs : [
        {headerName: 'Año', field: 'año', sortable: true, filter:true, checkboxSelection: true, headerClass: 'header-center', maxWidth: 100, resizable: true},
        {headerName: 'ID Asignatura', field: 'idasignatura', headerClass: 'header-center', filter: 'agTextColumnFilter', maxWidth: 130, resizable: true},
        {headerName: 'Asignatura', field: 'asignatura', headerClass: 'header-center', editable: true, maxWidth: 600, resizable: true},
        {headerName: 'ID Grado', field: 'idgrado', headerClass: 'header-center', maxWidth: 120, cellStyle: { textAlign: 'center' }, resizable: true},
        {headerName: 'Grado', field: 'grado', headerClass: 'header-center', editable: true, maxWidth: 110, resizable: true},
        {headerName: 'Sección', field: 'seccion', headerClass: 'header-center', editable: true, maxWidth: 80, cellStyle: { textAlign: 'center' }, resizable: true},
        {headerName: 'Jornada', field: 'jornada', headerClass: 'header-center', editable: true, maxWidth: 100, cellStyle: { textAlign: 'center' }, resizable: true},
        {headerName: 'Sistema', field: 'sistema', headerClass: 'header-center', editable: true, maxWidth: 120, cellStyle: { textAlign: 'center' }, resizable: true},
        {headerName: 'Periodo', field: 'periodo', headerClass: 'header-center', maxWidth: 110, cellStyle: { textAlign: 'center' }, resizable: true},
        {headerName: 'Modalidad', field: 'modalidad', headerClass: 'header-center', editable: true, width: 300, resizable: true},
      ],
      rowData: [
          { año: '2024', idgrado: '7MO-B-2024', grado: 'FIRST GRADE', seccion: 'A', jornada: 'MATUTINA', sistema: 'INTERNACIONAL', idasignatura: '2024-FI-A-MA', asignatura: 'MATH', periodo: 'I_SEMESTRE', modalidad: 'BACHILLERATO TÉCNICO PROFESIONAL'},
          // { año: '2024', idgrado: '7MO-B-2024', grado: 'FIRST GRADE', seccion: 'A', jornada: 'MATUTINA', sistema: 'INTERNACIONAL', idasignatura: '2024-FI-A-MA', asignatura: 'MATH', periodo: 'I_SEMESTRE'},
        ],
        onGridReady(params: any) {
          params.api.sizeColumnsToFit(); /*Ajusta el tamaño de las columnas al tamaño de cada celda */
        },
        onSelectionChanged: () => {
          this.onSelectionChanged();
        }
      };
      editarRegistro(data: any) {
        // Aquí puedes implementar la lógica para editar el registro
        // Por ejemplo, puedes mostrar un modal con los datos del registro para editar
        console.log('Editar registro:', data);
      }
    /*FUNCIÓN EN EL BOTON LIMPIAR*/
    limpiarbut():void{
      this.toastr.success('Limpio!', 'Formulario',{ timeOut: 1000 });
      this.formasignaturas.reset();
      this.gridApi.setRowData([]);
    }

    /*AGREGAR ASIGNATURAS EN EL SELECT DEL ASIGNATURA*/
    updateSubjects() {
      this.subjects = []; // Clear existing subjects
      if (this.selectedGrado === 'KINDERGARTEN' || this.selectedGrado === 'PREPARATORY') {
        this.subjects = ['MATH', 'SCIENCE', 'LANGUAGE', 'SPELLING', 'PHONICS', 'READING', 'ESPAÑOL', 'MATEMÁTICAS'];
      } else if (this.selectedGrado === 'FIRST GRADE' || this.selectedGrado === 'SECOND GRADE' || this.selectedGrado === 'THIRD GRADE') {
        this.subjects = ['EDUCACIÓN FISICA Y DEPORTES - P.E.', 'ESPAÑOL - SPANISH', 'MATEMÁTICAS - MATH', 'CIENCIAS - SCIENCE', 'CIENCIAS SOCIALES (ESPAÑOL) - SOCIAL STUDIES', 'ESTUDIOS SOCIALES (INGLÉS) - SOCIAL STUDIES', 'COMPUTACIÓN - COMPUTER', 'LECTURA - READING', 'ORTOGRAFÍA - SPELLING', 'FONÉTICA - PHONICS', 'LENGUAJE ESCRITO Y ORAL - LANGUAGE', 'CALIGRAFÍA - PENMASHIP', 'DIBUJO - DRAWING', 'MÚSICA - MUSIC', 'EDUCACIÓN PARA EL HOGAR - HOME ECONOMICS', 'ARTES MANUALES - MANUAL ARTS', 'ACTIVIDADES AGROPECUARIAS - AGROPECUARY', 'LABORATORIO - LABORATORY', 'BIBLIA - BIBLE'];
      }  else if (this.selectedGrado === 'FOURTH GRADE' || this.selectedGrado === 'FIFTH GRADE' || this.selectedGrado === 'SIXTH GRADE' ) {
        this.subjects = ['EDUCACIÓN FISICA Y DEPORTES - P.E.', 'ESPAÑOL - SPANISH', 'MATEMÁTICAS - MATH', 'CIENCIAS - SCIENCE', 'CIENCIAS SOCIALES (ESPAÑOL) - SOCIAL STUDIES', 'ESTUDIOS SOCIALES (INGLÉS) - SOCIAL STUDIES', 'COMPUTACIÓN - COMPUTER', 'LECTURA - READING', 'ORTOGRAFÍA - SPELLING', 'LENGUAJE ESCRITO Y ORAL - LANGUAGE', 'CALIGRAFÍA - PENMASHIP', 'DIBUJO - DRAWING', 'MÚSICA - MUSIC', 'EDUCACIÓN PARA EL HOGAR - HOME ECONOMICS', 'ARTES MANUALES - MANUAL ARTS', 'ACTIVIDADES AGROPECUARIAS - AGROPECUARY', 'LABORATORIO - LABORATORY', 'BIBLIA - BIBLE', 'CÍVICA - CIVIC'];
      } else if (this.selectedGrado === 'SEVENTH GRADE' || this.selectedGrado === 'EIGHTH GRADE' || this.selectedGrado === 'NINTH GRADE' ) {
        this.subjects = ['GRAMÁTICA - GRAMMAR', 'ESPAÑOL - SPANISH', 'EDUCACIÓN CÍVICA - CIVIC EDUCATION', 'INGLÉS (PRONUNCIACIÓN) - SPELLING', 'INGLÉS (PRONUNCIACIÓN) - READING', 'ESTUDIOS SOCIALES (ESPAÑOL) - SOCIAL STUDIES', 'EDUCACIÓN FÍSICA Y DEPORTES - P.E.', 'MATEMÁTICAS - MATH', 'CIENCIAS NATURALES - SCIENCE', 'COMPUTACIÓN - COMPUTER', 'BIBLIA - BIBLE', 'TECNOLOGÍA - TECNOLOGY', 'ESTUDIOS SOCIALES (INGLÉS) - SOCIAL ESTUDIES', 'EDUCACIÓN ARTÍSTICA - EDUCT ARTISTICA', 'ORTOGRAFÍA - PENMASHIP'];
      } else if (this.selectedGrado === 'TENTH GRADE' /*&& this.selectedModalidad === 'BACHILLERATO TÉCNICO PROFESIONAL' */) {
        this.subjects = ['MATEMÁTICA I - MATH I', 'ESPAÑOL I - SPANISH I', 'FÍSICA I - PHYSICS I','QUÍMICA I - CHEMISTRY I','BIOLOGÍA I- BIOLOGY I',
          'GRAMÁTICA (INGLÉS I) - GRAMMAR', 'SOCIOLOGÍA - SOCIOLOGY','FILOSOFÍA - PHILOSOPHY','INFORMÁTICA - INFORMATIC', 'PSICOLOGÍA - PSYCHOLOGY',
          'MATEMÁTICAS II - MATH II', 'ESPAÑOL II - SPANISH II', 'FÍSICA II - PHYSICS II','QUÍMICA II - CHEMISTRY II','BIOLOGÍA II - BIOLOGY II',
          'INGLÉS II - ENGLISH II','HISTORIA DE HONDURAS - HONDURAS HISTORY','ORIENTACIÓN VOCACIONAL - VOCATIONAL ORIENTATION','LENGUAJE ARTÍSTICO - ARTISTIC LANGUAGE',
          'EDUCACIÓN FÍSICA Y DEPORTES - P.E.','INGLÉS I (PRONUNCIACIÓN) - SPELLING','INGLÉS I (LECTURA) - READING','BIBLIA - BIBLE','GEOGRAFÍA - GEOGRAPHY','ORTOGRAFÍA - PENMASHIP'];
      } else if (this.selectedGrado === 'TENTH GRADE' /*&& this.selectedModalidad === 'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA' */) {
        this.subjects = ['MATEMÁTICA - MATH', 'ESPAÑOL- SPANISH','FÍSICA - PHYSICS','QUÍMICA - CHEMISTRY','BIOLOGÍA - BIOLOGY','GRAMÁTICA (INGLÉS I) - GRAMMAR',
          'SOCIOLOGÍA - SOCIOLOGY','FILOSOFÍA - PHILOSOPHY','INFORMÁTICA - INFORMATIC','FUNDAMENTOS DE PSICOLOGÍA - BASIS OF PSYCHOLOGY','MATEMÁTICAS II - MATH II',
          'ESPAÑOL II - SPANISH II','FÍSICA II - PHYSICS II','QUÍMICA II - CHEMISTRY II','BIOLOGÍA II - BIOLOGY II','INGLÉS II - ENGLISH II','HISTORIA DE HONDURAS - HONDURAS HISTORY',
          'ORIENTACIÓN VOCACIONAL - VOCATIONAL ORIENTATION','LENGUAJE ARTÍSTICO - ARTISTIC LANGUAGE','EDUCACIÓN FÍSICA Y DEPORTES - P.E.','INGLÉS (PRONUNCIACIÓN) - SPELLING',
          'INGLÉS (LECTURA) - READING','BIBLIA - BIBLE','GEOGRAFÍA - GEOGRAPHY','ORTOGRAFÍA - PENMASHIP'];
      } else if (this.selectedGrado === 'ELEVENTH GRADE' /*&& this.selectedModalidad === 'BACHILLERATO PROFESIONAL EN CIENCIAS Y HUMANIDADES (BILINGÜE)' */) {
        this.subjects = ['LENGUA Y LITERATURA - LANGUAGE AND LIT','MATEMÁTICA III - MATH III','FÍSICA III - PHYSIC III','QUÍMICA III - CHEMISTRY III','INTRODUCCIÓN A LA ECONOMÍA - INTRODUCTION TO ECONOMICS',
          'FUNDAMENTOS DE INVESTIGACIÓN SOCIAL - FOUNDATIONS OF SOCIAL RESEARCH','INGLÉS III - ENGLISH III','EDUCACIÓN FÍSICA Y DEPORTES II - P.E. AND SPORT','LÓGICA SIMBÓLICA - SYMBOLIC LOGIC','ORIENTACIÓN A LA EDUCACIÓN SUPERIOR - ORIENTATION TO HIGHER EDUCATION',
          'APRECIACIÓN ARTÍSTICA - ARTISTIC APPRECIATION','TECNOLOGÍAS DE INFORMACIÓN Y COMUNICACIÓN - COMMUNICATION TECHNOLOGY','LENGUAJE Y PENSAMIENTO CRÍTICO - LANGUAGE AND CRITICAL THINKING',
          'MATEMÁTICA IV - MATH IV','FÍSICA IV - PHYSIC IV','EDUCACIÓN AMBIENTAL - ENVIRONMENTAL EDUCATION','BIOLOGÍA HUMANA - HUMAN BIOLOGY',
          'HISTORIA CONTEMPORÁNEA - CONTEMPORARY HISTORY','ANTROPOLOGÍA - ANTHROPOLOGY','DISEÑO DE PROYECTOS CIENTÍFICOS - SCIENTIFIC PROJECT DESIGN',
          'INGLÉS IV - ENGLISH IV','DIBUJO TÉCNICO - TECHNICAL DRAWING','FUNDAMENTOS DE ÉTICA PROFESIONAL - FOUNDATIONS OF PROFESSIONAL ETHICS',
          'INTRODUCCIÓN A LA PROGRAMACIÓN - INTRODUCTION TO PROGRAMMING','ORTOGRAFÍA - PENMASHIP','INGLÉS III (LECTURA) - READING',
          'INGLÉS III (PRONUNCIACIÓN) - SPELLING','BIBLIA - BIBLE','ETIQUETA - LABEL','INGLÉS III (GRAMÁTICA) - GRAMMAR'];
      } else if (this.selectedGrado === 'ELEVENTH GRADE' /*&& this.selectedModalidad === 'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA' */) {
        this.subjects = ['MATEMÁTICA III (APLICADA) - APPLIED MATHEMATICS','LENGUA Y LITERATURA - LANG AND LITERATURE','FÍSICA APLICADA - APPLIED PHYSICS',
          'INGLÉS TÉCNICO III - TECHNICAL ENGLISH','ÉTICA Y ORIENTACIÓN PROFESIONAL - ETHICS AND GUIDANCE','LABORATORIO DE INFORMÁTICA I - COMPUTER LAB I',
          'PROGRAMACIÓN I - PROGRAMMING I','ANÁLISIS Y DISEÑO I - ANALYSIS AND DESIGN I','INFORMÁTICA I - COMPUTER SCIENCE I','MERCADOTECNIA - MARKETING',
          'ORGANIZACIÓN DEL TRABAJO - WORK ORGANIZATION','PROYECTOS Y PRESUPUESTO - PROJECTS AND BUDGETS','LEGISLACIÓN - LEGISLATION',
          'LABORATORIO DE INFORMÁTICA II - COMPUTER LAB II','PROGRAMACIÓN II - PROGRAMMING II','ANÁLISIS Y DISEÑO II - ANALYSIS AND DESIGN II',
          'INFORMÁTICA II - COMPUTER SCIENCE II','INGLÉS III (LECTURA) - READING','INGLÉS III (PRONUNCIACIÓN) - SPELLING','BIOLOGÍA - BIOLOGY',
          'EDUCACIÓN FÍSICA Y DEPORTES - P.E.','BIBLIA - BIBLE','ORTOGRAFÍA - PENMASHIP','INGLÉS III (GRAMÁTICA) - GRAMMAR'];
      } else if (this.selectedGrado === 'TWELVE GRADE' /*&& this.selectedModalidad === 'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA' */) {
        this.subjects = ['LABORATORIO DE INFORMÁTICA III - COMPUTER LAB III','PROGRAMACIÓN III - PROGRAMMING III','MANTENIMIENTO Y REPARACIÓN I - MAINTENANCE AND REPAIR I',
          'REDES INFORMÁTICAS I - COMPUTER NETWORKS I','DISEÑO WEB - WEB DESIGN','LABORATORIO DE INFORMÁTICA IV - COMPUTER LAB IV',
          'PROGRAMACIÓN IV - PROGRAMMING IV','MANTENIMIENTO Y REPARACIÓN II - MAINTENANCE AND REPAIR II','REDES INFORMÁTICAS II - COMPUTER NETWORKS II',
          'DISEÑO WEB II - WEB DESIGN II','BIBLIA - BIBLE','ORTOGRAFÍA - PENMASHIP','ETIQUETA - LABEL','INGLÉS (LECTURA) - READING',
          'GRAMÁTICA - GRAMMAR','INGLÉS (PRONUNCIACIÓN) - SPELLING','EDUCACIÓN FÍSICA Y DEPORTE - P.E.'];
      } else {
    this.subjects = []; // Si no se selecciona un grado, no hay asignaturas
  }
    }
    /*FUNCIÓN PARA EL ID ASIGNATURA AUTOMATICO*/
    private asignaturaCounter: number = 0;
    actualizarIdAsignatura() {
      if (this.selectedYear && this.selectedGrado && this.selectedSeccion && this.selectedAsignatura) {
        const key = `${this.selectedYear}-${this.selectedGrado.substring(0, 2)}-${this.selectedSeccion}-${this.selectedAsignatura.substring(0, 2)}`;
        if (this.gridApi) {
          const rowCount = this.gridApi.getDisplayedRowCount();
          this.asignaturaCounter = rowCount + 1;
        } else {
          this.asignaturaCounter = 0;
        }
        // Construir el nuevo idAsignatura usando el contador actualizado y el key
        this.idAsignatura = `${this.asignaturaCounter}-${key}`;
      } else {
        this.asignaturaCounter = 0;
        this.idAsignatura = '';
      }
      this.updateSubjects();
    }

  /*FUNCIÓN PARA ELIMINAR FILAS SELECCIONADAS */
    // Función para eliminar las filas seleccionadas
    
    eliminarFilasSeleccionadas() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      if (selectedNodes.length > 0) {
        const selectedData = selectedNodes.map((node: { data: any; }) => node.data);
        // Aquí puedes procesar los datos seleccionados como desees
        // Por ejemplo, podrías enviarlos al servidor para eliminarlos en la base de datos
        // y luego actualizar la cuadrícula o eliminarlos directamente de la cuadrícula.
        // En este ejemplo, simplemente los eliminaremos de la cuadrícula.
        this.gridApi.applyTransaction({ remove: selectedData });
            // Actualiza la variable hasSelectedRows
              this.hasSelectedRows = false;
      }
      // Mostrar notificación
      this.toastr.error('Borrada.', 'Asignatura')
      // Borrar la notificación después de 1000 milisegundos (1 segundo)
      setTimeout(() => {
        this.toastr.clear();
      }, 1000);     
  }
    // Evento que se activa cuando cambian las selecciones
    onSelectionChanged() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      this.hasSelectedRows = selectedNodes.length > 0;
    }
}