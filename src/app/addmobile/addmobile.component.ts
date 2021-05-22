import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addmobile',
  templateUrl: './addmobile.component.html',
  styleUrls: ['./addmobile.component.css']
})
export class AddmobileComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  mobileModel=new Mobile('','','')

  onSubmitNewMobile(){
    this.dsObj.createNewMobile(this.mobileModel).subscribe(
      res=>{
        //navigate to viewmobile
        this.router.navigateByUrl("products/mobiles")
      },
      err=>{
        console.log("Error in creating new mobile is",err)
      }
    )
  }

}
