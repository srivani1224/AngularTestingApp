import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 
    console.log("Login constructor is executed");
  }
  ngOnInit(){

  }

  onLogin(ref){

    let userLoginObj = ref.value
    
    //if username and password is admin then only navigate to admin component
    if(userLoginObj.username!='admin' || userLoginObj.password!='admin'){
      alert('Invalid Credentials')
    }
    else{
      //navigate to admin component 
      this.router.navigateByUrl('/admin')
    }
  }

}
