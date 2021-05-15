import { Injectable } from '@angular/core';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor() { }

  private bikes:Product[]=[

    {
     productTitle:"Vanilla",
     description:"$50",
     productImage:"https://media.bakingo.com/sites/default/files/chocolate-vanilla-cake-A.jpg?tr=w-320,h-240,dpr-1.5,q-70"
     },
 
     
     {
       productTitle:"Pine Apple",
       description:"$55",
       productImage:"https://localbeeindia.com/wp-content/uploads/2020/01/Pineapple-Vanilla-Cake-Cropped.jpg"
     },
     
     {
     productTitle:"Black Forest",
     description:"$75",
     productImage:"https://media.bakingo.com/sites/default/files/black-forest-round-shaped-cake-3-cake0623blac-A.jpg?tr=w-320,h-240,dpr-1.5,q-70"
     },
 
     {
     productTitle:"Chocolate",
     description:"$68",
     productImage:"https://media.bakingo.com/sites/default/files/snicker-chocolate-cake-A.jpg?tr=w-320,h-240,dpr-1.5,q-70"
     },
 
     {
     productTitle:"Strawberry",
     description:"$69",
     productImage:"https://st2.depositphotos.com/3935465/7854/i/950/depositphotos_78548694-stock-photo-chocolate-cake-with-fresh-strawberry.jpg"
     },
 
     {
     productTitle:"Butter Scotch",
     description:"$78",
     productImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/5/1/IG1C17_30946_s4x3.jpg.rend.hgtvcom.826.620.suffix/1433541424559.jpeg"
     }

   ];

   getBikesData():Product[]{
    return this.bikes;
}
}
