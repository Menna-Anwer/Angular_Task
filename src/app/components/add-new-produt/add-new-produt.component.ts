import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/icategory';
import { ProductsServiceService } from './../Services/products-service.service';
import { IProduct } from './../../iproduct';
import { ApiSProductService } from './../Services/api-sproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-produt',
  templateUrl: './add-new-produt.component.html',
  styleUrls: ['./add-new-produt.component.css']
})
export class AddNewProdutComponent implements OnInit {
  category:ICategory[];
  prod:IProduct= {} as IProduct

  constructor( private ApiSProductService:ApiSProductService ,private Router:Router) {

    this.category=[
      {id:0,name:"all"},
      {id:1,name:"Laptops"},
      {id:2,name:"Tablets"},
      {id:3,name:"Mobile"}
    ]
   }

  ngOnInit(): void {
  }

  addProd(){
    const observer = {
      next: (prod: IProduct) => {
        alert("Done")
        this.Router.navigateByUrl('/Products')
        
      }
    }
    this.ApiSProductService.addProduct(this.prod).subscribe(observer)
  }

}
