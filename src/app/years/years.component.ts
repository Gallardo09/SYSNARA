import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderPositionUtils } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  //Declaración de la propiedad fechaPorDefecto 
  //fechaPorDefecto?: string; singifica indefinido

  // FECHA POR DEFECTO INICIAL
  fechaEstablecida: string = '';
  // FECHA POR DEFECTO INICIAL
  fechaPorDefectoInicial: string = '';
  // FECHA POR DEFECTO FINAL
  fechaPorDefectoFinal: string = '';
  // FECHA POR DEFECTO FINAL
  Observacion: string = '';

  ngOnInit() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    this.fechaEstablecida = `${year}`;
    this.fechaPorDefectoInicial = `${year}-02-01`;
    this.fechaPorDefectoFinal = `${year}-11-30`;
  }
  listayears: any[] = [ /*Listas en la table*/
    {year: '2022', FechaInicial: '2022-02-01', FechaFinal: '2022-11-30', Observacion: 'NINGUNA'},
    {year: '2021', FechaInicial: '2021-02-01', FechaFinal: '2021-11-30', Observacion: 'NINGUNA'},
];

/*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
form: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
    year: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]], 
    FechaInicial: ['', Validators.required],
    FechaFinal: ['', Validators.required],
    Observacion: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(7)]] 
      })
  }
  /*FUNCIÓN EN EL BOTON AGREGAR*/
  agregarYear(): void{
    console.log(this.form);

    const years: any = {
      year: this.form.get('year')?.value,
      FechaInicial: this.form.get('FechaInicial')?.value,
      FechaFinal: this.form.get('FechaFinal')?.value,
      Observacion: this.form.get('Observacion')?.value,
    }
    // Utilizamos unshift() en lugar de push() para agregar datos nuevos arriba.
    this.listayears.unshift(years); 
    this.toastr.success('Datos Guardados!', 'Regitrar Año',{ timeOut: 2000 });
    this.form.reset();
  }
}

  // DATAGRID
  // rowdata: any[] = [{ Years: '2023', DateInitial: '2023-02-01', DateFinish: '2023-11-30', Observation: 'NINGUNA'},
  // { Years: '2024', DateInitial: '2024-02-01', DateFinish: '2024-11-30', Observation: 'NINGUNA'},]; // Inicializar como un array vacío
  // columnDefs: ColDef[]  = [// Propiedad para almacenar las definiciones de columna del grid
  //   { headerName: 'Año Escolar', field: 'Years', headerClass: 'grid-header' },
  //   { headerName: 'Fecha Inicial', field: 'DateInitial', headerClass: 'grid-header' },
  //   { headerName: 'Fecha Final', field: 'DateFinish', headerClass: 'grid-header' },
  //   { headerName: 'Observación', field: 'Observation', headerClass: 'grid-header' }
  // ];
  // borrarDatos(): void {     Swal.fire({
  //   position: 'center',
  //   icon: 'error',
  //   title: '<span style="font-size: 20px;"> Datos Borrados.</span>',
  //   showConfirmButton: false,
  //   timer: 1000
  // })}
  // guardarDatos(): void {
  //   const nuevoDato: any = {
  //     Years: this.fechaEstablecida,
  //     DateInitial: this.fechaPorDefectoInicial,
  //     DateFinish: this.fechaPorDefectoFinal,
  //     Observation: this.Observacion
  //   };
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: '<span style="font-size: 20px;"> Datos Guardados Exitosamente.</span>',
  //     showConfirmButton: false,
  //     timer: 1000
  //   })
  //   this.rowdata.push(nuevoDato);
  // }