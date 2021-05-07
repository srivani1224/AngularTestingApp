import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  {

  userObj : User = {username:"",DOB:"",email:""};

  addData()
  {
    console.log(this.userObj);
    this.userObj={username:"",DOB:"",email:""};
  }

}
