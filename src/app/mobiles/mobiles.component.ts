import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent  {

  mobiles=[

    {
      productTitle:"Baby Teddy",
      description:"$50",
      productImage:"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/010/29-09-2018/1542090944DSC_6595-600x600.jpg"
      },
  
      
      {
        productTitle:"Pretty Pink Teddy",
        description:"$55",
        productImage:"https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/27thDec/pink-comboa-600x600.JPG"
      },
      
      {
      productTitle:"Blue Bear",
      description:"$75",
      productImage:"https://rukminim1.flixcart.com/image/416/416/ke0a7ww0/stuffed-toy/v/v/w/soft-and-cute-blue-color-teddy-bear-6-feet-for-boys-and-girls-original-imafus5rgawxbhbr.jpeg?q=70"
      },
  
      {
      productTitle:"Big Brown Teddy",
      description:"$68",
      productImage:"https://rukminim1.flixcart.com/image/416/416/k4bms280/stuffed-toy/9/b/t/stuffed-spongy-huggable-cute-brown-teddy-bear-brown-color-91-original-imafhqv8hzbbakqy.jpeg?q=70"
      },
  
      {
      productTitle:"Teddy Couple",
      description:"$69",
      productImage:"https://wallpapercave.com/wp/wp2751978.jpg"
      },
  
      {
      productTitle:"Love Teddy",
      description:"$78",
      productImage:"https://www.teahub.io/photos/full/35-357191_cute-teddy-bear-wallpapers-wallpaper-teddy-bear-wallpapers.jpg"
      }

    ]

}
