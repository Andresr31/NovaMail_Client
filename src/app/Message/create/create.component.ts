import { Component, OnInit } from '@angular/core';
import { Message } from '../../Models/Message';
import { RemoteService } from '../../services/remote.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public username:string;
  public id:string;
  public email:string;
  public token: string;

  public message:Message;

  constructor(private remote: RemoteService) {
    this.username = localStorage.getItem("name");
    this.id = localStorage.getItem("id");
    this.email = localStorage.getItem("email");
    this.token = localStorage.getItem("token");
   }

  ngOnInit(): void {
  }

}
