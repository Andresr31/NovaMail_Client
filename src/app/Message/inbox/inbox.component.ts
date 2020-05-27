import { Component, OnInit } from '@angular/core';
import { Message } from '../../Models/Message';
import { RemoteService } from '../../services/remote.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public username:string;
  public id:string;
  public email:string;
  public token: string;

  public messages:any;

  constructor(private remote: RemoteService) {
    this.username = localStorage.getItem("name");
    this.id = localStorage.getItem("id");
    this.email = localStorage.getItem("email");
    this.token = localStorage.getItem("token");
    this.getMessages();
    
   }

  ngOnInit(): void {
  }

  public getMessages(){
    
    this.remote.getMessagesInbox(this.id, this.token).subscribe(
      response => {
        console.log(response);
        this.messages = response;
        //
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
