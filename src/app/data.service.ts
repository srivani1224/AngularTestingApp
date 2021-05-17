import { Injectable } from '@angular/core';
import { Product } from './models/products.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //import HttpClient object to service
  constructor(private hc: HttpClient) { }
    

      getMobilesData():Observable<Product[]>{
          //http get
          return this.hc.get<Product[]>("assets/data-mobiles.json");
      }
}
