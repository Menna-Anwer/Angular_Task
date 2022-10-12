import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, observable, retry, throwError } from 'rxjs';
import { IProduct } from './../../iproduct';
import { environment } from 'src/environments/environment';
import { CartItem } from 'src/app/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ApiSProductService {
  addToCart(item: CartItem) {
    throw new Error('Method not implemented.');
  }
  HTTPoption ;
  constructor( private HttpClient: HttpClient) { 

    this. HTTPoption = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Error'));
  }
  getAllProds(): Observable<IProduct[]>
  {
    return this.HttpClient.get<IProduct[]>(`${environment.ApiUrl}/product`)
  }

  getProdsByCatId(catId:number):Observable<IProduct[]>{

    return this.HttpClient.get<IProduct[]>(`${environment.ApiUrl}/product?categoryID=${catId}`)
  }
  getProdsByProdId(prodId:number):Observable<IProduct>{

    return this.HttpClient.get<IProduct>(`${environment.ApiUrl}/product/${prodId}`)
  }
  
  addProduct(prod:IProduct):Observable<IProduct>{

     return this.HttpClient.post<IProduct> (`${environment.ApiUrl}/product`,
     JSON.stringify(prod),this.HTTPoption)
     .pipe(retry(3),catchError(this.handleError))
  }
  updateProd(prodId:number,updateProd:IProduct):Observable<IProduct>{
    return this.HttpClient.patch<IProduct>(`${environment.ApiUrl}/product/${prodId}`,
    JSON.stringify(updateProd))
  }
  deletProd(prodId:number):Observable<IProduct>{
    return this.HttpClient.delete<IProduct>(`${environment.ApiUrl}/product/${prodId}`)
  }
}
