import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyStructDirective]'
})
export class MyStructDirectiveDirective {

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {
    this.delay();
  }
  delay() {
    setTimeout( () => this.view.createEmbeddedView(this.template), 2000);
  }
}
