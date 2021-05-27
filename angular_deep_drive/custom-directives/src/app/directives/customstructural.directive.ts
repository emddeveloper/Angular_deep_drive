import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomstructural]',
})
export class CustomstructuralDirective {
  constructor(
    private vcref: ViewContainerRef,
    private templateref: TemplateRef<any>
  ) {}
  @Input() set appCustomstructural(logic: boolean) {
    if (logic) {
      this.vcref.createEmbeddedView(this.templateref);
    } else {
      this.vcref.clear();
    }
  }
}
