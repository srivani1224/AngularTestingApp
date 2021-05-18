import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  mySubscription=Subscription;
  userbyid:Users;
  //Inject ActivatedRoute
  constructor(private ar:ActivatedRoute, private fakeObj:FakedataService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;

    //get data of this current id
    this.fakeObj.getUserById(id).subscribe(
      userIdData=>{
        this.userbyid=userIdData
        console.log(this.userbyid)
      },
      err=>{
        console.log('Error is',err)
      }
    )
  }

}
