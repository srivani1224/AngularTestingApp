import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../app/models/posts.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  //Inject HttpClient Obj
  constructor(private fakeObj:HttpClient) { 

  }
  
  getPosts():Observable<Post[]>{
    return this.fakeObj.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
