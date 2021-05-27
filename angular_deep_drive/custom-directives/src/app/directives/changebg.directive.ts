import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBG]',
})
export class changeBgDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  //static bg change
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
