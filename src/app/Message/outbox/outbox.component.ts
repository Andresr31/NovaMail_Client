import { Component, OnInit } from '@angular/core';
import { Message } from '../../Models/Message';
import { RemoteService } from '../../services/remote.service';


@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {

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
    this.getMessagesOut();
   }

  ngOnInit(): void {
  }

  public getMessagesOut(){
    
    this.remote.getMessagesOutbox(this.id, this.token).subscribe(
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
