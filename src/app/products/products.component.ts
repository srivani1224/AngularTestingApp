import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products:Product[]=[
    {
    productTitle:"Parrot",
    description:"Parrots, also known as psittacines, are birds of the roughly 398 species, found mostly in tropical and subtropical regions.",
    productImage:"https://wallpapercave.com/wp/wp1861231.jpg"
    },
    {
    productTitle:"Pigeon",
    description:"Columbidae is a bird family consisting of pigeons and doves. It is the only family in the order Columbiformes.",
    productImage:"https://www.teahub.io/photos/full/32-327086_pigeon-flower-nature-good-night.jpg"
    },
    
    {
    productTitle:"Kingfisher",
    description:"Kingfishers or Alcedinidae are a family of small to medium-sized, brightly colored birds in the order Coraciiformes.",
    productImage:"https://images7.alphacoders.com/416/416332.jpg"
    },
    
    {
    productTitle:"Sparrow",
    description:"Old World sparrows are a family of small passerine birds. They are also known as true sparrows.House sparrows are noisy and gregarious.",
    productImage:"https://inhabitat.com/wp-content/blogs.dir/1/files/2014/12/Warbler.jpg"
    },
    
    {
    productTitle:"Cuckoo",
    description:"The cuckoos are a family of birds, Cuculidae, the sole taxon in the order Cuculiformes.The cuckoo family includes the common or European cuckoo.",
    productImage:"http://news.bbcimg.co.uk/media/images/48409000/jpg/_48409045_cuckoo_466.jpg"
    },
    
    {
    productTitle:"HummingBird",
    description:"Hummingbirds are birds native to the Americas and constitute the biological family Trochilidae. There are about 360 species.",
    productImage:"https://wallpapercave.com/wp/lVnKOji.jpg"
    }
    ];
  
    
    productsSentByChild=[];
    productCount:number=0;

    getProductDetailsFromChild(productTitle){
      console.log(productTitle);
      this.productsSentByChild.push(productTitle);
      this.productCount++;
    }

}


