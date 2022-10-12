import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { ICategory } from './../../icategory';
import { ProductsServiceService } from './../Services/products-service.service';
import { CartItem } from './../../cart-item';
import { ThisReceiver } from '@angular/compiler';
import { ApiSProductService } from './../Services/api-sproduct.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnChanges {
 
  totalPrice:number=0;
  proListCat :IProduct[] = [];

  @Input() listCategory:number=0;
  

  @Output()  cartItem : EventEmitter<CartItem>
  
  constructor(
     private ProductsServiceService: ProductsServiceService,
     private ApiSProductService: ApiSProductService) {
  
    this.cartItem =new EventEmitter<CartItem>()

  }

  ngOnChanges(): void {
    this.selectCat()

    this.proListCat  = this.ProductsServiceService.getProductsByCatID(this.listCategory)
    ////////from ApI
    
    this.ApiSProductService.getProdsByCatId(this.listCategory).subscribe((product)=>{
      this.proListCat = product
    })
  
  }
  selectCat() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.proListCat = this.ProductsServiceService.getProducts()
    console.log(this.proListCat);

      //////////from ApI
    
    this.ApiSProductService.getAllProds().subscribe((product)=>{
      this.proListCat = product
    })
    
  }

  buyNow(proId:number,count:string){
    // this.totalPrice += proPrice*+count
    // this.productsPrice.emit(this.totalPrice )
    const index = this.proListCat.findIndex(pro => pro.id === proId );
      this.proListCat[index].quantity -= +count;
    const item : CartItem = {Id:proId, name : this.proListCat[index].name ,
       price:this.proListCat[index].price, count: +count}
     this.ProductsServiceService.addToCart(item)
    this.ApiSProductService.addToCart(item)
       this.cartItem.emit(item)
  } 
}


