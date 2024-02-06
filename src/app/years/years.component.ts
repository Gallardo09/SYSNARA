import { style } from '@angular/animations';
import { Component, OnInit, ChangeDetectorRef, AfterContentChecked, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderPositionUtils } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';

import { ConectdbyearsService } from '../services/conectdbyears.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css'],
})
export class YearsComponent implements OnInit {
  //Declaración de las propiedades
  listayears: any[] = [];
  accion = 'AGREGAR';

/*AGREGAR DATOS A LA TABLA CON EL FORMULARIO*/
form: FormGroup;
id: number | undefined;
  constructor(
    private fb: FormBuilder, 
    private toastr: ToastrService,
    public changeDetector: ChangeDetectorRef,
    private _Yearsservice:ConectdbyearsService,) {
    // Crear un formulario reactivo usando FormBuilder
    this.form = this.fb.group({
      idaño: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]], 
      añoInicio: ['', Validators.required],
      añoFin: ['', Validators.required],
      observacion: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(7)]] 
    });
  }

 ngOnInit() {
    this.obtenerYears(); 
  }

  obtenerYears(){
    this._Yearsservice.getlistyears().subscribe(data =>{
      console.log(data);  // Verifica que los datos se estén recibiendo correctamente
      this.listayears = data;
    }, error => {
      console.log(error);
    })
 } 

  /*FUNCIÓN EN EL BOTON AGREGAR*/
  guardarYears(): void {
      
    const years: any = {
        idaño: this.form.get('idaño')?.value,
        añoInicio: this.form.get('añoInicio')?.value,
        añoFin: this.form.get('añoFin')?.value,
        observacion: this.form.get('Observacion')?.value,
      };

    if(this.id == undefined){
   //Agregamos un nuevo registro año.
        //Conexion con el service _Yearsservice
        this._Yearsservice.saveyears(years).subscribe(data=>{
          this.toastr.success('Datos Guardados!', 'Regitrar Año',{ timeOut: 2000 });
          this.obtenerYears();
          this.form.reset();
        }, error =>{
          console.log(error); //Error mostrado en consola
          // this.toastr.info(`El año ${this.form.get('idaño')?.value} ya ha sido registrado anteriormente!`, 'Advertencia',{ timeOut: 2000 });
          //Segunda manera de mostrar el mensaje.
          const idaño = this.form.get('idaño')?.value;
          this.toastr.info(`El año ${idaño} ya ha sido registrado anteriormente!`, 'Advertencia', { timeOut: 2000 });
        })
    } else {
      //Editamos un año.
        years.id = this.id;
        this._Yearsservice.updateyears(this.id, years).subscribe(data => {
        this.form.reset();
        this.accion = 'AGREGAR';
        this.id = undefined;
        this.toastr.info(`El año ${this.form.get('idaño')?.value} fue actualizado con éxito!`, 'Actualización',{ timeOut: 1500 });
        this.obtenerYears();
      }, 
      //Por si ocurre un error que me muestre un mensaje. 
      error =>{
        console.log(error);
      })
    }
    console.log("Se registro Year:", Number(this.form.get('idaño')?.value));
    console.log("Se registro FechaInicial:", this.form.get('añoInicio')?.value);
    console.log("Se registro FechaFinal:", this.form.get('añoFin')?.value);
    this.obtenerYears();
  }

  /*FUNCIÓN DELETE / BORRAR AÑO*/
  eliminarYear(idaño: number){
    // this.listayears.splice(index,1);
    this._Yearsservice.deleteyears(idaño).subscribe(data =>{
      this.toastr.error('El año fue eliminado con exito!','Eliminar');
      this.obtenerYears();
    }, error=>{
        console.log(error);
        this.toastr.info('El año tiene datos vinculados con otras tablas!','Advertencia');
    })
  }

  /*FUNCIÓN UPDATE / EDITAR AÑO*/
  editarYears(years:any){
    console.log(years);
    this.accion = 'EDITAR';
    this.id = years.id;

    //Funcion para que me muestre los datos en el FORM
    this.form.patchValue({
      idaño: years.idaño, 
      añoInicio: years.añoInicio,
      añoFin: years.añoFin,
      observacion: years.observacion,
    })
  }
}