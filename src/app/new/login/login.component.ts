import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../components/Services/auth-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  constructor( private AuthServiceService:AuthServiceService , private Router : Router) { 
    this.userLoginForm=new FormGroup({
      email:new FormControl(""),
      password : new FormControl("")
    })

  }
  isLogged:boolean = false;
  ngOnInit(): void {
    this.isLogged =this.AuthServiceService.isLogged;
  }

  login(){
    // const observer = {
    //   next:()=>{
    //     alert("login is done")
    //     this.Router.navigateByUrl("/Products")
    //   }
    // }
  
    this.AuthServiceService.login(this.userLoginForm.controls["email"].value,this.userLoginForm.controls["password"].value);
    this.isLogged =this.AuthServiceService.isLogged;
  }

  logout(){
     this.AuthServiceService.logout();
     this.isLogged =this.AuthServiceService.isLogged;
  }
}
