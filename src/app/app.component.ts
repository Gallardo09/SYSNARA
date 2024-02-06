import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showLogin: boolean = true;
  icon = faCoffee; // Icono
  user?: string;
  pass?: string;
  isLoggedIn:boolean = false;
  primeraParteLoaded = false;
  segundaParteLoaded = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((data) => {
      this.isLoggedIn = data; // Actualizar el valor de isLoggedIn en el componente padre
      this.showLogin = !data; // Actualizar la variable showLogin
      // console.log(`El valor de la variable antes: ${!data}`);
      // console.log(`El valor de la variable cambio a: ${data}`);
    });

    setTimeout(() => {
      this.primeraParteLoaded = true;

      setTimeout(() => {
        this.primeraParteLoaded = false;
        this.segundaParteLoaded = true;
      }, 1500);
    }, 0);
  }
}
