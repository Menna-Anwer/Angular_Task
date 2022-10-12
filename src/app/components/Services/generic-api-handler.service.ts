import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError, retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiViweModel } from './../../api-viwe-model';

@Injectable({
  providedIn: 'root'
})
export class GenericApiHandlerService {
  HTTPoption ;
  constructor( private HttpClient:HttpClient) { 
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

  getAll( ApiRoute:string):Observable<ApiViweModel>{
    return this.HttpClient.get<ApiViweModel>(`${environment.ApiUrl}/${ApiRoute}`)
    .pipe(retry(2),catchError(this.handleError))
  
  }
  // getById( id:number):Observable<ApiViweModel>{

  // }
  // post(new:any){

  // }
  // put(id:number,new:any){
    
  // }
  delete(id:any){
    
  }

}
