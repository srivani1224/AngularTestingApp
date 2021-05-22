import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MobilesComponent } from 'src/app/mobiles/mobiles.component';
import { Mobile } from 'src/app/models/mobile.model'

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Mobile[]=[];
  editMobileIndex;
  editMobileObj = new Mobile('','','');
  editMobileStatus:boolean=false;

  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log("viewproducts error is",err)
      }
    )
  }

  //to edit mobile
  editMobile(mobileObj,ind){
    this.editMobileObj=mobileObj;
    this.editMobileIndex=ind;
    this.editMobileStatus=true;
    console.log('Object to be edited',this.editMobileObj)
  }

  //to save changes made to mobile
  saveMobile(modifiedMobileObject){
    this.editMobileStatus=false;
    modifiedMobileObject.id=this.editMobileObj["id"];
    modifiedMobileObject.productImage=this.editMobileObj["productImage"];
    console.log('Modified object is',modifiedMobileObject)

    this.dsObj.updateMobile(modifiedMobileObject).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log('error is ',err)
      }
    )
  }

  //delete mobile
  deleteMobile(mobileObj){
    console.log("mobile to delete",mobileObj.id)
    this.dsObj.deleteMobile(mobileObj.id).subscribe(
      res=>{
        //write getting latest data from API
        console.log("res is ",res);
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }

}
