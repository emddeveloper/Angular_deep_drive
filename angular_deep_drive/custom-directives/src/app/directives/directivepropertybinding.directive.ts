import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDirectivePropertyBinding]',
})
export class DirectivepropertybindingDirective implements OnInit {
  constructor() {}
  @Input() defaultcolor = 'transparent';
  @Input() highlightcolor = 'green';
  @HostBinding('style.backgroundColor') bgcolor: string;
  ngOnInit() {
    this.bgcolor = this.defaultcolor;
  }
  @HostListener('mouseenter') myfun() {
    this.bgcolor = this.highlightcolor;
  }

  @HostListener('mouseleave') myfun2() {
    this.bgcolor = this.defaultcolor;
  }
}
