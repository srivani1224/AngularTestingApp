import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Fakeemp } from '../models/fakeemp.model';

@Component({
  selector: 'app-fake-employee',
  templateUrl: './fake-employee.component.html',
  styleUrls: ['./fake-employee.component.css']
})
export class FakeEmployeeComponent implements OnInit {

  mySubscription:Subscription;
  myEmp:Fakeemp[];

  //Inject Fakedataservice obj
  constructor(private empObj:FakedataService) { }

  ngOnInit(): void {
    this.mySubscription=this.empObj.getEmp().subscribe(
      empData=>{
        this.myEmp=empData;
        console.log(this.myEmp)
      },
      err=>{
        console.log('Error is',err)
      }
    )
  }

}
