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
  selector: 'app-reportematricula',
  templateUrl: './reportematricula.component.html',
  styleUrls: ['./reportematricula.component.css']
})
export class ReportematriculaComponent {
  listayears: any[] = [];

  constructor(
    private _Yearsservice:ConectdbyearsService,) {
        }
 
    ngOnInit() {
      // this.listayears$ = this._Yearsservice.getlistyears();
      // this.listyears$ = this._Yearsservice.getlistyears();
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
}
