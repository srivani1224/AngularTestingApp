import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit{

  
  bikes:Product[]=[];

  //Inject object of dataservice class
  constructor(private dsObj:BikeService){

  }

  ngOnInit(){
    this.bikes=this.dsObj.getBikesData();
  }

}
