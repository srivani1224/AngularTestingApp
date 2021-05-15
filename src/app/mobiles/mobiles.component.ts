import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-mobiles', 
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobiles:Product[]=[];

  //Inject object of dataservice class
  constructor(private dsObj:MobileService){

  }

  ngOnInit(){
    this.mobiles=this.dsObj.getMobilesData();
  }

}
