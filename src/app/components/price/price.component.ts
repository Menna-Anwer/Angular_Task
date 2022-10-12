import { Component, Input, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
    totalItem : number = 0
    totalPrice: number = 0

  constructor(private ProductsServiceService: ProductsServiceService) { }

  ngOnInit(): void {
    this.totalItem 
  }

}
