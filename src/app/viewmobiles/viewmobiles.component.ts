import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {
/*
  //without observable subscrption

  mobiles= new Observable<Product[]>();

  //Inject object of dataservice class
  constructor(private dsObj:DataService){

  }

  ngOnInit(){
    this.mobiles=this.dsObj.getMobilesData()
    
  }*/

  searchTerm:string;

  mobiles:Product[]=[];

  //Inject object of dataservice class
  constructor(private dsObj:DataService){

  }

  ngOnInit(){
    this.dsObj.getMobilesData().subscribe(
      data=>{
        console.log(data);
        this.mobiles=data;
      },
      err=>{
        console.log("error is",err)
      }
    
    )
  }
  
}
