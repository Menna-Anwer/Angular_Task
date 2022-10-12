import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isloggedSub : BehaviorSubject<boolean>;

  constructor(private HttpClient:HttpClient , private Router :Router) {
    this.isloggedSub = new BehaviorSubject(false) 
  
   }
  login(email:string,password:string){
     this.HttpClient.get<any[]>(`${environment.ApiUrl}/users?email=${email}`).subscribe(value =>{ 
     if(value.length>0 && value[0].password==password){
      let token="12345678";
      localStorage.setItem("token",token)
      this.isloggedSub.next(true)
      this.Router.navigateByUrl("/Products")
     }
    })
  }
  logout(){
    localStorage.removeItem("token")
    this.isloggedSub.next(false)

  }
  get isLogged():boolean{
     return (localStorage.getItem("token"))? true : false;
  }

  getLogSub() {
    return this.isloggedSub
  }

}
