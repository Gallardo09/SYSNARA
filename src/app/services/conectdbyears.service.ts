import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectdbyearsService {

  //Declaración de variables
  // private myAppUrl = "https://localhost:7052/"; //url al ejecutar swagger.
  private myAppUrl = "https://localhost:7049/"; //url al ejecutar swagger. DBSMILE
  private myApiUrl = "api/SysYears/"; //Esta información esta en Swagger ejecutado
  constructor(private http:HttpClient) {}

  //Metodo que devuelve un observable
  getlistyears(): Observable<any>
  {
      return this.http.get(this.myAppUrl + this.myApiUrl)
  }

  deleteyears(id:number):Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveyears(yearsSalvar: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, yearsSalvar);
  }

  updateyears(id: number, years:any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, years);
  } 
 
}