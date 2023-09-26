import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { YearsComponent } from './years/years.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component'; 
import { AuthService } from './shared/auth.service';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { GradosyseccionesComponent } from './gradosysecciones/gradosysecciones.component';
import { DocentesComponent } from './docentes/docentes.component';
import { PadresComponent } from './padres/padres.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ReportematriculaComponent } from './reportematricula/reportematricula.component';
import { NotasComponent } from './notas/notas.component';
import { ImprimirnotasComponent } from './imprimirnotas/imprimirnotas.component';
import { HistoriaComponent } from './historia/historia.component';
import { TutorialComponent } from './tutorial/tutorial.component';


const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent, children: [{ path: '', component: AppComponent }] },
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
  { path: '**', component: PrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
