import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  mySubscription:Subscription;
  myUsers:Users[]=[];

  //Inject Fakedataservice Object
  constructor(private fsObj:FakedataService, private router:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getUsers().subscribe(
      usersData=>{
        this.myUsers=usersData;
        console.log(this.myUsers)
      },
      err=>{
        console.log('Error is',err)
      }
    )
  }

  onSelectId(id){
    this.router.navigateByUrl('users/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }


}
