import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //for pipes 
  n:number=10;

  constructor(private router:Router) { 
    console.log("Login constructor is executed");
  }
  ngOnInit(){

  }

  onLogin(ref){

    let userLoginObj = ref.value
    /*
    //if username and password is admin then only navigate to admin component
    if(userLoginObj.username!='admin'){
      alert('Invalid Username')
    }
    else if(userLoginObj.password!='admin'){
      alert('Invalid Password')
    }
    else{
      //save usernames in local storage 
      localStorage.setItem("username","admin")

      //navigate to admin component 
      this.router.navigateByUrl('/admin')
    }*/
      console.log(userLoginObj)
  }


}
