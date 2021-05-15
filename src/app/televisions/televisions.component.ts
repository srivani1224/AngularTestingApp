import { Component, OnInit } from '@angular/core';
import { TelevisionService } from '../television.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{


  televisions:Product[]=[];

  //Inject object of dataservice class
  constructor(private dsObj:TelevisionService){

  }

  ngOnInit(){
    this.televisions=this.dsObj.getTelevisionsData();
  }



}
