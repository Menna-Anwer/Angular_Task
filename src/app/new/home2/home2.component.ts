import { Component, OnInit } from '@angular/core';
import { AdsServiceService } from './../../components/Services/ads-service.service';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  subscripe: any;

  constructor(private AdsServiceService:AdsServiceService ) { }

  ngOnInit(): void {
    let observableAds ={
      next:(data:string)=>{
        console.log(data);
        

      },
      error:(error:string)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("finish");
        
      }
    }
    let oservable = this.AdsServiceService.getAdslist(3).pipe(
      filter(ele => ele.includes("Sale"))
      ,map(ads => "New Ads:" + ads)
    )
    let adsSub= oservable.subscribe(observableAds)
    this.subscripe.push(adsSub)

  }

}
function observer(observer: any) {
  throw new Error('Function not implemented.');
}

