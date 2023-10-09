import { Component } from '@angular/core';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.css']
})
export class PadresComponent {
  RegistrarEncargados(): void{

  }

  listaEncargado: any[] = [ /*Listas en la table*/
  {year: '2022', FechaInicial: '2022-02-01', FechaFinal: '2022-11-30', Observacion: 'NINGUNA'},
  {year: '2021', FechaInicial: '2021-02-01', FechaFinal: '2021-11-30', Observacion: 'NINGUNA'},
];
}