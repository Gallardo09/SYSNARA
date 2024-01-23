import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectdbyearsService {

  //Declaración de variables
  private myAppUrl = "https://localhost:7011/"; //url al ejecutar swagger.
  private myApiUrl = "api/SysYears/"; //Esta información esta en Swagger ejecutado
  constructor(private http:HttpClient) {}

  //Metodo que devuelve un observable
  getlistyears(): Observable<any>
  {
      return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}