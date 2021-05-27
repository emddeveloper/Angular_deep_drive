import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangebgbyhostlistnerhostbinding]',
})
export class ChangebgbyhostlistnerhostbindingDirective {
  constructor() {}
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  @HostListener('mouseenter') myfunction1() {
    this.bgColor = 'red';
  }
  @HostListener('mouseleave') myfunction2() {
    this.bgColor = 'transparent';
  }
}
