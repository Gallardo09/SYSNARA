import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent {
  RegistrarDocentes(): void{

  }

  listaEncargado: any[] = [ /*Listas en la table*/
  {year: '2022', FechaInicial: '2022-02-01', FechaFinal: '2022-11-30', Observacion: 'NINGUNA'},
  {year: '2021', FechaInicial: '2021-02-01', FechaFinal: '2021-11-30', Observacion: 'NINGUNA'},
];
}
