import { Component, Input, EventEmitter ,Output} from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  //to receive data from parent to child
  @Input() productObj:Product;

  //create a custom event
  @Output() myEvent = new EventEmitter();

  sendProductDetailsToProduct(productTitle){
    this.myEvent.emit(productTitle);
  }
}
