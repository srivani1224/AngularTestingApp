import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Fakecolor } from '../models/fakecolor.model';


@Component({
  selector: 'app-fake-color',
  templateUrl: './fake-color.component.html',
  styleUrls: ['./fake-color.component.css']
})
export class FakeColorComponent implements OnInit {

  mySubscription:Subscription;
  myColors:Fakecolor;

  //Inject Fakedataservice Obj
  constructor(private colorObj:FakedataService) { }

  ngOnInit(): void {
    this.mySubscription=this.colorObj.getColor().subscribe(
      colorData=>{
        this.myColors=colorData;
        console.log(this.myColors)
      },
      err=>{
        console.log('Error is',err)
      }
    )
  }

}
