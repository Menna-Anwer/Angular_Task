import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {
 private adsListArr : string [];
  constructor() { 
    this.adsListArr=[
      "Sale to 60%",
      "Sale to 50%",
      "no",
      "Sale to 30%",
      "Sale to 20%",
      "",
      "Sale to 10%",
    ]
  }
  getAdslist(intevalTime:number): Observable <string>{
    return new Observable<string>((observable)=>{
      let count = 0;
      let timer = setInterval(()=>{
        if(count == this.adsListArr.length){
          observable.complete();
        }
        if (this.adsListArr[count]==""){
          observable.error("ERROR")
        }
        observable.next(this.adsListArr[count])
        count++
      },intevalTime*100)
      return {
        unsubscribe(){
          clearInterval(timer)
        }
      }
    })
  }


}
