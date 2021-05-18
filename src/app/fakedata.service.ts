import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../app/models/posts.model'
import { Fakecolor } from './models/fakecolor.model'
import { Fakeemp} from './models/fakeemp.model'
import { Observable } from 'rxjs';
import { Users } from './models/users.model'

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

  getColor():Observable<Fakecolor>{
    return this.fakeObj.get<Fakecolor>('https://reqres.in/api/unknown')
  }

  getEmp():Observable<Fakeemp[]>{
    return this.fakeObj.get<Fakeemp[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUsers():Observable<Users[]>{
    return this.fakeObj.get<Users[]>('http://localhost:3000/users')
  }

  getUserById(id):Observable<Users>{
    return this.fakeObj.get<Users>('http://localhost:3000/users/'+id)
  }
}
