import { style } from '@angular/animations';
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderPositionUtils } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';
import { ConectdbyearsService } from '../services/conectdbyears.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  //Declaración de la propiedad fechaPorDefecto 
  //fechaPorDefecto?: string; singifica indefinido

  // FECHA POR DEFECTO INICIAL
  year?: string;
  // FECHA POR DEFECTO INICIAL
  FechaInicial?: string;
  // FECHA POR DEFECTO FINAL
  FechaFinal?: string;
  // FECHA POR DEFECTO FINAL
  Observacion: string = '';

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  
  listayears: any[] = [];
  // listayears: any[] = [ /*Listas en la table*/];
  // // listayears: any[] = [ /*Listas en la table*/
  // //     {year: '2022', FechaInicial: '2022-02-01', FechaFinal: '2022-11-30', Observacion: 'NINGUNA'},
  // //     {year: '2021', FechaInicial: '2021-02-01', FechaFinal: '2021-11-30', Observacion: 'NINGUNA'},
  // // ];


/*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
form: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private toastr: ToastrService,
    public changeDetector: ChangeDetectorRef,
    private _conectdbyearservice: ConectdbyearsService ) {
    this.form = this.fb.group({
    year: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]], 
    FechaInicial: ['', Validators.required],
    FechaFinal: ['', Validators.required],
    Observacion: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(7)]] 
      })
  }

 ngOnInit() {
    this.obtenerdatosyears();
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();
    this.year = `${year}`;
    this.FechaInicial = `${year}-02-01`;
    this.FechaFinal = `${year}-11-30`;
  }

/*FUNCION PARA OBTENER LOS DATOS DEL SERVICE conectdbyearservice*/
  obtenerdatosyears() {
    this._conectdbyearservice.getlistyears().subscribe(data => {
      console.log(data);  
      this.listayears = data;
      }, error => {
        console.log(error);
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