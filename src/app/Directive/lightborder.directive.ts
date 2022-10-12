import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[Lightborder]'
})
export class LightborderDirective implements OnChanges{
  @Input("Lightborder") border : string = "pink"
  @Input () defualtBorder :string = "blue"

  constructor( private ele : ElementRef) { 
     
  }
  ngOnChanges(): void {
    this.ele.nativeElement.style.border="2px solid red"
  }
  @HostListener("mouseover") mouseOver(){
    this.ele.nativeElement.style.border="2px solid gray"
    this.ele.nativeElement.style.width = " 20rem"
    this.ele.nativeElement.style.boxShadow = "5px 5px 5px 12px lightblue"
  }
  @HostListener("mouseout") mouseOut(){
    this.ele.nativeElement.style.border= `2px solid ${this.defualtBorder}`
    this.ele.nativeElement.style.width = " 18rem"
    this.ele.nativeElement.style.boxShadow = "none"
  }

}
