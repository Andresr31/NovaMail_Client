import { Component, OnInit } from '@angular/core';
import { Message } from '../../Models/Message';
import { RemoteService } from '../../services/remote.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public username: string;
  public id: string;
  public email: string;
  public token: string;

  public message: Message;

  constructor(private remote: RemoteService) {
    this.username = localStorage.getItem("name");
    this.id = localStorage.getItem("id");
    this.email = localStorage.getItem("email");
    this.token = localStorage.getItem("token");
  }

  ngOnInit(): void {
  }

  public createMessage(topic: any, transmitter: any, receivers: any, content: any){
    if(this.validateMessage(topic, transmitter, receivers, content)){
      var statusReceived = "false";
      var statusDeleted = "false";
      var receiversSplit = receivers.value.split(",");
      var r = []
      receiversSplit.forEach(element => {
        r.push(element);
      });
      
      //console.log(receiversSplit);
      var message = new Message(this.id, r, topic.value, content.value, statusReceived, statusDeleted);
      this.remote.createMessage(message, this.token).subscribe(
        response => {
          console.log(response);
          console.log(response['status'] == 'succes');
          if (response['status'] == 'succes') {
            Swal.fire(
              'Exito!',
              'Mensaje enviado',
              'success'
            );

            topic.value = "";
            transmitter.value = "";
            receivers.value = "";
            content.value = "";
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }

  public validateMessage(topic: any, transmitter: any, receivers: any, content: any) {
    if (topic.value == "" || transmitter.value == "" || receivers.value == "" || content.value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor complete todos los campos.',
      });
      // colores a los cmapos de texto
      if (topic.value == "") {
        topic.classList.remove("is-valid");
        topic.classList.add("is-invalid");
      } else {
        topic.classList.remove("is-invalid");
        topic.classList.add("is-valid");
      }
      if (transmitter.value == "") {
        transmitter.classList.remove("is-valid");
        transmitter.classList.add("is-invalid");
      } else {
        transmitter.classList.remove("is-invalid");
        transmitter.classList.add("is-valid");
      }
      if (receivers.value == "") {
        receivers.classList.remove("is-valid");
        receivers.classList.add("is-invalid");
      } else {
        receivers.classList.remove("is-invalid");
        receivers.classList.add("is-valid");
      }
      if (content.value == "") {
        content.classList.remove("is-valid");
        content.classList.add("is-invalid");
      } else {
        content.classList.remove("is-invalid");
        content.classList.add("is-valid");
      }
      return false;
    } else {
      return true;
    }

  }
}
