import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() {
    console.log(localStorage.getItem("auth"));
    
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("token"));
    
   }

  ngOnInit(): void {
  }

}
