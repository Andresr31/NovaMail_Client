import { Component, OnInit } from '@angular/core';
import { Message } from '../../Models/Message';
import { RemoteService } from '../../services/remote.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {

  public username: string;
  public id: string;
  public email: string;
  public token: string;

  public message: Message;

  public idM:string;

  constructor(private remote: RemoteService) {
    this.username = localStorage.getItem("name");
    this.id = localStorage.getItem("id");
    this.email = localStorage.getItem("email");
    this.token = localStorage.getItem("token");
    this.idM = localStorage.getItem("idM");
    this.showMessage();
   }

  ngOnInit(): void {
  }

  public showMessage(){
      
  }

}
