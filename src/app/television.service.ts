import { Injectable } from '@angular/core';
import { Product } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor() { }

  private televisions:Product[]=[

    {
    productTitle:"Classic Green Bouquet",
    description:"$50",
    productImage:"https://cdn.shopify.com/s/files/1/0203/4109/6548/products/Green_bo_1024x1024.jpg?v=1569760475"
    },

    
    {
      productTitle:"Fifteen Beautiful Flowers",
      description:"$55",
      productImage:"https://cdn.shopify.com/s/files/1/0014/2249/1720/products/FAIHD20170402_1024x1024@2x.jpg?v=1554447500"
    },
    
    {
    productTitle:"Blue Orchids Bouquet",
    description:"$75",
    productImage:"https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/35242_smiling-heart.jpeg"
    },

    {
    productTitle:"Pretty Pink Bouquet",
    description:"$68",
    productImage:"https://cdn.shopify.com/s/files/1/1060/3816/products/cute-pure-pink-bunch_c51f1e8a-a9e6-4691-9579-f6157beb357e_900x.jpg?v=1594973385"
    },

    {
    productTitle:"Yellow Bouquet",
    description:"$69",
    productImage:"https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-bouquet-of-10-yellow-roses-in-tissue-wrapping-46732-m.jpg"
    },

    {
    productTitle:"Rosy Red Bouquet",
    description:"$78",
    productImage:"https://www.giftdecorshop.com/cdn/images/cache/catalog/product/Flower/rose_flowers/8_red_roses_bouquet_1559888000_large.jpg"
    }

    ];

    getTelevisionsData():Product[]{
      return this.televisions;
  }


}
