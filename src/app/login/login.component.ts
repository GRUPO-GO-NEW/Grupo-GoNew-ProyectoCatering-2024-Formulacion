import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    datos = {
      usuario: 'admin',
      contrasena: '12345'
    }
    loginData = {
        usuario: '',
        contrasena: ''
    };

    constructor(private router: Router) {}

    onSubmit() {
        if(this.loginData.usuario == this.datos.usuario && this.loginData.contrasena == this.datos.contrasena){
          this.router.navigate(['/productos']);
        }else{
          alert("Datos incorrectos")
        }
    }
}
