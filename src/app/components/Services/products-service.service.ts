import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/cart-item';
import { IProduct } from 'src/app/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private product:IProduct[];
  private cart: CartItem [] =[]
  private totalPrice: number =0
  constructor() { 

    this.product=[
      {id: 1, name: "Lenovo laptops", price: 700, quantity: 3, 
        imageURL: "https://placehold.jp/100x100.png", categoryID: 1 },
      {id: 2, name: "Samsung Tablets", price: 200, quantity: 1, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 2 },
      {id: 3, name: "Nokia Mobile", price: 100, quantity: 4, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 3 },

      {id: 4, name: "Apple Mobile", price: 600, quantity: 7, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 3 },


      {id: 5, name: "Samsung Mobile", price: 200, quantity: 5, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 3 },

      {id: 6, name: "MacBook laptops", price: 1000, quantity: 6, 
      imageURL: "https://placehold.jp/100x100.png", categoryID: 1 },
    ]

  }
  getProducts():IProduct []{
      return this.product
  }

  getProductsByCatID(catID:number): IProduct []{
    // console.log(catID);
    
    if(catID == 0){
      console.log(catID)
      return this.product 
    
    }else{
   
      return this.product.filter(prod=>prod.categoryID== catID)
    }
  }

	getProductByID(prodID:number): IProduct | null{
     let  findprod = this.product.find(pro=>pro.id==prodID);
     return findprod ? findprod : null
   } 
   addToCart(item:CartItem){
    const  foundItem = this.cart.findIndex(el => el.Id === item.Id);
    if( foundItem > -1){
      this.cart[ foundItem].count = +this.cart[ foundItem].count + +item.count;
    }else{

      this.cart.push(item);
    }
      this.totalPrice = 0 
    for (const item of this.cart) {
      this.totalPrice += item.price * item.count
    }
    console.log(this.totalPrice);
    console.log(this.cart.length);
  }
  getTotalItems() : number {
    return this.cart.length
  }
  getTotalPrice() : number {
    return this.totalPrice
  }
  getProdID(){
    let prodId :number [] = this.product.map(pro=> pro.id)
    return prodId
  } 

}
