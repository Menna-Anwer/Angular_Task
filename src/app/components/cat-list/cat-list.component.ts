import { Component, OnInit } from '@angular/core';
// import { CartItem } from 'src/app/cart-item';
import { ICategory } from 'src/app/icategory';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  category:ICategory[];
  selectCategory:number=0;
  // totalPrice:number=0;
  // cart:CartItem[]=[]
  constructor() {
    this.category=[
      {id:0,name:"all"},
      {id:1,name:"Laptops"},
      {id:2,name:"Tablets"},
      {id:3,name:"Mobile"}
    ]
  }

  ngOnInit(): void {
  }
  // addToCart(item:CartItem){
  //   const  foundItem = this.cart.findIndex(el => el.Id === item.Id);
  //   if( foundItem > -1){
  //     this.cart[ foundItem].count = +this.cart[ foundItem].count + +item.count;
  //   }else{

  //     this.cart.push(item);
  //   }
  //     this.totalPrice = 0 
  //   for (const item of this.cart) {
  //     this.totalPrice += item.price * item.count
  //   }
  // }

}
