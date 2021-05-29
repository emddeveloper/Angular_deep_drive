import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}
  @HostBinding('class.show') isOpen = false;
  // @HostListener('click') toogleFunction() {
  //   this.isOpen = !this.isOpen;
  // }
  //close click on any where
  @HostListener('document:click', ['$event']) toogleFunction(event: Event) {
    console.log(event.target, this.elementRef.nativeElement);
    this.isOpen = this.elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
