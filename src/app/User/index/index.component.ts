import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { RemoteService } from '../../services/remote.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public username:string;
  public id:string;
  public email:string;
  public token: string;

  public users:any;

  constructor(private remote: RemoteService) {
    this.username = localStorage.getItem("name");
    this.id = localStorage.getItem("id");
    this.email = localStorage.getItem("email");
    this.token = localStorage.getItem("token");
    this.getUsers();
   }

  ngOnInit(): void {
  }

  public getUsers(){
    
    this.remote.getUsers(this.token).subscribe(
      response => {
        console.log(response);
        this.users = response;
        //
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
