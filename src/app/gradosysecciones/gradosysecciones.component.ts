import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { combineLatest } from 'rxjs';
import { of } from 'rxjs';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-gradosysecciones',
  templateUrl: './gradosysecciones.component.html',
  styleUrls: ['./gradosysecciones.component.css']
})
export class GradosyseccionesComponent {
  /*DECLARACIÓN DE PROPIEDADES*/
  selectedYear?: string;
  selectedGrado?: string;
  selectedSeccion?: string;
  selectedModalidad?: string;
  idgrado:string = '';
  jornada:string = '';
  modalidad:string = '';
  selectedSistema:string = '';
  isSticky: boolean = false; /*Emcabezado estatico en tabla*/
    /*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
    formgradosysecciones: FormGroup;
    constructor(private fb: FormBuilder, private toastr: ToastrService, private elementRef: ElementRef) {
      this.formgradosysecciones = this.fb.group({
        selectedYear: ['', [Validators.required, Validators.maxLength(9)]], 
        idgrado: [{ value: '', disabled: true }, [Validators.required]],
        selectedGrado: ['', [Validators.required]],
        selectedSeccion: ['', [Validators.required]],
        jornada: ['', [Validators.required]],
        selectedSistema: ['', [Validators.required]],
        selectedModalidad: ['', [Validators.required]]
      });      
    }
    listagrados: any[] = [ /*Listas en la table*/
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'},
    {selectedYear: '2023', idgrado: '2024-SEC-B-A', selectedGrado: 'SECOND GRADE', selectedSeccion: 'A', jornada: 'MATUTINA', selectedSistema: 'ANGLOSAJÓN', selectedModalidad:'BACHILLERATO TÉCNICO PROFESIONAL EN INFORMÁTICA'}];
    /*FUNCIÓN EN EL BOTON AGREGAR*/
    RegistrarGradoySeccion(): void{
      console.log(this.formgradosysecciones);
  
      const ContGrados: any = {
        year: this.formgradosysecciones.get('selectedYear')?.value,
      }
      this.toastr.success('Datos Guardados!', 'Regitrar Grado y Sección',{ timeOut: 2000 });
      this.formgradosysecciones.reset();
    }
    /*BOTON LIMPIAR FORMULARIO*/
    limpiarForm(): void{
      this.idgrado = '';
      this.selectedYear = '';
      this.selectedGrado = '';
      this.selectedSeccion = '';
      this.jornada = '';
      this.selectedSistema = '';
      this.selectedModalidad = '';
    }
    /*FUNCIÓN EN EL BOTON AGREGAR*/
    agregarGrado(): void{
      console.log(this.formgradosysecciones);

      const ContGrados: any = {
        selectedYear: this.formgradosysecciones.get('selectedYear')?.value,
        idgrado: this.formgradosysecciones.get('idgrado')?.value,
        selectedGrado: this.formgradosysecciones.get('selectedGrado')?.value,
        selectedSeccion: this.formgradosysecciones.get('selectedSeccion')?.value,
        jornada: this.formgradosysecciones.get('jornada')?.value,
        selectedSistema: this.formgradosysecciones.get('selectedSistema')?.value,
        modalidad: this.formgradosysecciones.get('modalidad')?.value
      }
      // Utilizamos unshift() en lugar de push() para agregar datos nuevos arriba.
      this.toastr.success('Datos Guardados!', 'Regitrar Grado y Sección',{ timeOut: 2000 });
      this.formgradosysecciones.reset();
    }

  /*FUNCIÓN PARA EL ID ASIGNATURA AUTOMATICO*/
  actualizarIdGrado() {
    if (this.selectedYear && this.selectedGrado && this.selectedSeccion && this.selectedSistema) {
      this.idgrado = `${this.selectedYear}-${this.selectedGrado?.substring(0, 3)}-${this.selectedSeccion || ''}-${this.selectedSistema?.substring(0, 1)}`;
    } else {
      this.idgrado = '';
    }
  }

  /*FIJAR EMCABEZADO EN TABLA*/

}