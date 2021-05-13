import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { 
    console.log("Register constructor is executed");
  }

  ngOnInit(){

  }

  ngOnDestroy(){
    console.log("register component is destroyed")
  }
}
