import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  mySubscription:Subscription;
  myPosts:Post[]=[];

  //Inject Fakedataservice Object
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getPosts().subscribe(
      postsData=>{
        this.myPosts=postsData;
        console.log(this.myPosts)
      },
      err=>{
        console.log('Error is',err)
      }
    )
  }
  
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
