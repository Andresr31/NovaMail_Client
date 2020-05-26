import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { RemoteService } from '../../services/remote.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private remote: RemoteService) { }

  ngOnInit(): void {
  }

  public register(name: any, email: any, password: any, confirmPassword: any) {
    if(this.validateUser(name, email, password, confirmPassword)){

    }
  }

  public validateUser(name: any, email: any, password: any, confirmPassword: any) {
    if (name.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor complete todos los campos.',
      });
      // colores a los cmapos de texto
      if(name.value == ""){
        name.classList.remove("is-valid");         
        name.classList.add("is-invalid");
      } else {
        name.classList.remove("is-invalid");         
        name.classList.add("is-valid");
      }
      if(email.value == ""){
        email.classList.remove("is-valid");         
        email.classList.add("is-invalid");
      } else {
        email.classList.remove("is-invalid");         
        email.classList.add("is-valid");
      }
      if(password.value == ""){
        password.classList.remove("is-valid");         
        password.classList.add("is-invalid");
      } else {
        password.classList.remove("is-invalid");         
        password.classList.add("is-valid");
      }
      if(confirmPassword.value == ""){
        confirmPassword.classList.remove("is-valid");         
        confirmPassword.classList.add("is-invalid");
      } else {
        confirmPassword.classList.remove("is-invalid");         
        confirmPassword.classList.add("is-valid");
      }
      return false;
    } else if(!(password.value == confirmPassword.value)){
        confirmPassword.classList.remove("is-valid");         
        confirmPassword.classList.add("is-invalid");
        password.classList.remove("is-valid");         
        password.classList.add("is-invalid");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no coinciden. Por favor verique de nuevo.',
        });
        return false;
    } else {
      return true;
    }
  }
}
