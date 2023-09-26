import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user?: string;
  pass?: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login() {
    if (this.user === 'imv' && this.pass === '123') {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Bienvenido(a) a SYSNARA',
        showConfirmButton: false,
        timer: 1500
      });
      this.authService.setLoggedIn(true); // Cambiar el valor de isLoggedIn
      // Redirigir al componente raíz
      // this.router.navigate(['/app']);
      return;
    } else {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: '<span style="font-size: 25px;"> Credenciales Incorrectas.</span>',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  forgotPass() {
    Swal.fire({
      html: '<span style="font-size: 15px;">Si olvidaste el usuario o contraseña, comunícate con el Desarrollador Web Darbin Gallardo 9782-4537 / darbingallardo9@gmail.com</span>'
    });
  }
}