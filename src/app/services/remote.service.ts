import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { global } from './global';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})

export class RemoteService {

  private datos: HttpClient;   
  private url: String;

  constructor(datos: HttpClient) {    
     this.datos = datos;      
     this.url = global.url;
    }

    public register(user: User) {     
      let json = {
        name:''+user.name,            
        email:''+user.email,        
        password:''+user.password,
      }
      console.log(json);     
      return this.datos.post(this.url + 'register', json);    
    }
}
