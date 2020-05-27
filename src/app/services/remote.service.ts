import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { global } from './global';
import { User } from '../Models/User';
import { Message } from '../Models/Message';

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

    public login(email:string, password:string) {     
      let json = {            
        email:''+email,        
        password:''+password,
      }
      console.log(json);     
      return this.datos.post(this.url + 'authenticate', json);    
    }

    public getMessagesInbox(id:string,token:string){
      
      let headers = new HttpHeaders();
      headers = headers.set('access-token', token);
      return this.datos.get(this.url + 'inbox/'+id,{ headers: headers});    
    }

    public show(id:string,token:string){
      
      let headers = new HttpHeaders();
      headers = headers.set('access-token', token);
      return this.datos.get(this.url + 'messagesin/'+id,{ headers: headers});    
    }

    public getMessagesOutbox(id:string,token:string){
      
      let headers = new HttpHeaders();
      headers = headers.set('access-token', token);
      return this.datos.get(this.url + 'outbox/'+id,{ headers: headers});    
    }

    public getUsers(token:string){
      
      let headers = new HttpHeaders();
      headers = headers.set('access-token', token);
      return this.datos.get(this.url + 'users',{ headers: headers});    
    }

    public createMessage(message: Message, token:string){
      let json = {
        transmitter:''+message.transmitter,            
        topic:''+message.topic,        
        content:''+message.content,
        receiver:''+message.receiver
      }
      console.log(json);
      let headers = new HttpHeaders();
      headers = headers.set('access-token', token);    
      return this.datos.post(this.url + 'message',json, { headers: headers});    
    }

}
