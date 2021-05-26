import { Injectable } from '@angular/core';
import { Mobile } from './models/mobile.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //import HttpClient object to service
  constructor(private hc: HttpClient) { }
    
      //to read mobiles data
      getMobilesData():Observable<Mobile[]>{
          //http get
          return this.hc.get<Mobile[]>("http://localhost:3000/mobiles");
      }

      //to save /create new mobile data
      createNewMobile(mobileObj):Observable<any>{
        return this.hc.post("http://localhost:3000/mobiles",mobileObj)
      }

      //update mobile
      updateMobile(modifiedMobileObject):Observable<any>{
        return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileObject.id,modifiedMobileObject);
      }

      //delete mobile
      deleteMobile(id):Observable<any>{
        console.log("id is ",id)
        return this.hc.delete("http://localhost:3000/mobiles/"+id)
      }

      //to check login status
      userLoginStatus():boolean{
        if(localStorage.getItem("username")==null){
          return false;
        }
        else{
          return true;
        }
      }

      userLogout(){
        localStorage.clear();
      }
}
