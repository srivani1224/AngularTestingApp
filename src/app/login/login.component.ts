import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor() { 
    console.log("Login constructor is executed");
  }
  ngOnInit(){

  }

  ngOnDestroy(){
    console.log("Login component is destroyed")
  }

}
