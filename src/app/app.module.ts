import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { YearsComponent } from './years/years.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './shared/auth.service';
import { PrincipalComponent } from './principal/principal.component';
import { GradosyseccionesComponent } from './gradosysecciones/gradosysecciones.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { DocentesComponent } from './docentes/docentes.component';
import { PadresComponent } from './padres/padres.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ReportematriculaComponent } from './reportematricula/reportematricula.component';
import { NotasComponent } from './notas/notas.component';
import { ImprimirnotasComponent } from './imprimirnotas/imprimirnotas.component';
import { HistoriaComponent } from './historia/historia.component';
import { TutorialComponent } from './tutorial/tutorial.component';

//Login
//Dashboard

const routes: Routes = [
  {     //Esto redirecciona cualquier ruta a la página principal http://localhost:4200/
    path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent},
  { path: 'years', component: YearsComponent },
  { path: 'gradosysecciones', component: GradosyseccionesComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'docentes', component: DocentesComponent},
  { path: 'padres', component: PadresComponent},
  { path: 'matricula', component: MatriculaComponent},
  { path: 'reportematricula', component: ReportematriculaComponent},
  { path: 'notas', component: NotasComponent},
  { path: 'imprimirnotas', component: ImprimirnotasComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'tutorial', component: TutorialComponent},

  { //Creando una ruta por si se accede a un enlace incorrecto.
    // el '**' significa cualquier ruta
    path: '**', component: PrincipalComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    YearsComponent,
    PrincipalComponent,
    GradosyseccionesComponent,
    AsignaturasComponent,
    DocentesComponent,
    PadresComponent,
    MatriculaComponent,
    ReportematriculaComponent,
    NotasComponent,
    ImprimirnotasComponent,
    HistoriaComponent,
    TutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes), //Nuestro enrutador principal
    AgGridModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: 
  [
    RouterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
