import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../Services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   isLogged : boolean = false;
  constructor(private AuthServiceService:AuthServiceService ) { }

  ngOnInit(): void {
   this.AuthServiceService.getLogSub().subscribe(status=>{
    this.isLogged= status
   })
  }

}
