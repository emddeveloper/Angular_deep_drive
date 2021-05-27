import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appchangeBgByMouseEvent]',
})
export class changeBgByMouseEventDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') myfunction1() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );
  }
  @HostListener('mouseleave') myfunction2() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
