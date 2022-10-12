import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { IProduct } from 'src/app/iproduct';
import { ProductsServiceService } from '../Services/products-service.service';

@Component({
  selector: 'app-prod-detalis',
  templateUrl: './prod-detalis.component.html',
  styleUrls: ['./prod-detalis.component.css']
})
export class ProdDetalisComponent implements OnInit {
   //recive Product Number
   curprodID :number =0;
   productList :IProduct | null =null;
   prodIdarr : number [] =[]
  //to read parameter go to services ActivatedRoute
  constructor(private activatedRoute :ActivatedRoute ,
    private Router :Router,
    private ProductsServiceService : ProductsServiceService,
    private Location : Location  ) { }
  
  ngOnInit(): void {
    //go to ActivatedRoute and give  :prodId" in Products/:prodId"
    // this.curprodID = Number(this.activatedRoute.snapshot.paramMap.get("prodId"))
    console.log(this.curprodID);

   

    this.prodIdarr = this.ProductsServiceService.getProdID()
    
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.curprodID=Number(paramMap.get("prodId"))
      this.productList = this.ProductsServiceService.getProductByID(this.curprodID)
    })
  }

  // goBack(){
  //    this.Location.back();
  // }

  prevPord(){
    let currentItem = this.prodIdarr.findIndex((ele)=>ele==this.curprodID)
    console.log(currentItem);
    if(currentItem>0) {
    this.Router.navigate(["/Products",this.prodIdarr[currentItem-1]])
    } 
  }
  
  nextPord(){
    let currentItem = this.prodIdarr.findIndex((ele)=>ele==this.curprodID)
    console.log(currentItem);
    
    if(currentItem< this.prodIdarr.length) {
    this.Router.navigate(["/Products",this.prodIdarr[currentItem+1]])
    }
  }
}