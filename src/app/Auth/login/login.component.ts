import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../../services/remote.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private remote: RemoteService) { 
    localStorage.clear();
  }

  ngOnInit(): void {
  }
  

  public login(email:any, password:any){
    if(this.validateLogin(email, password)){
      this.remote.login(email.value, password.value).subscribe(
        response => {
          console.log(response);
          
          if(response['status'] =="200"){
            this.userStorage(response);
            this.redirect();
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Usuario y/o Contraseña incorrectos.',
            }); 
            email.value="";
            password.value="";
            email.classList.remove("is-valid");
            email.classList.remove("is-invalid");
            password.classList.remove("is-valid");
            password.classList.remove("is-invalid");
          }
          //
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }

  public userStorage(response:any){
    localStorage.setItem("auth","true");
    localStorage.setItem("id", response['data'].user['_id']);
    localStorage.setItem("name", response['data'].user['name']);
    localStorage.setItem("email", response['data'].user['email']);
    localStorage.setItem("token", response['data'].token);
  }

  public redirect(){
    // Falta roles
    document.location.href="inbox";
  }

  public validateLogin(email:any, password:any){
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email.value == "" || password.value == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor complete todos los campos.',
      });
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
      return false;
      } else if (!emailRegex.test(email.value)) {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor verifique el correo electrónico.',
        });
        return false;
        } else {
        return true;
        }
      }
}
