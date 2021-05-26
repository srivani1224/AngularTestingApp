
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dsObj:DataService){

  }
























/*
 userObj : User ={username:"",DOB:"",email:""};



 addData()
  {
    console.log(this.userObj);
    this.userObj={username:"",DOB:"",email:""};
  }
*/
 









  /*
  status:boolean=false;
  data=[];

  addData(ref:NgForm)
  {
    let userData = ref.value;
    this.data.push(userData);
    ref.reset();
  }

  deleteUser(ind:number)
  {
    this.data.splice(ind,1);
  }

  userId:string;
  userTarget:string;

  getTarget(ind:number)
  {
    this.userTarget='#a'+ind;
    console.log(this.userTarget)
  }
  getId(ind:number)
  {
    this.userId='a'+ind;
    console.log(this.userId)
  }

  */

  
  /* Assignment -18
  ar:string[]=[]

  addName(s:string){
    this.ar.push(s);
  }

  status:boolean=true;
  setStatus()
  {
    this.status = !this.status;
  }
  */

  
  /*
  ar:string[]=[]
  sendName(v:string){
    this.ar.push(v);
  }
  */


  
  /*
  status:boolean=false;
  setStatus()
  {
    this.status = !this.status;
  }

  arr:number[]=[1,2,3,4,5];
  */



  /*
  //instance data
  nameOfCourse:string = "angular";
  version:number = 11;
  instructor:string ="Rajesh";

  courseDetails={
    duration:"2 months",
    modeOfTraining:"online"
  }

  imagePath:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LyYFYMemkRO_G4Lc9mQSygeLfwP1482KHg&usqp=CAU"
  status:boolean = false

  data:string;
  //define method
  sendData(d){
    this.data = d;
  }*/
}
