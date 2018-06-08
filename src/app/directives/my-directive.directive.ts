import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
  exportAs: 'myExport'
})
export class MyDirectiveDirective {
  @HostBinding('style.color') myColor: string;
  @HostListener('click', ['$event']) changeColor(event) {
    this.myColor = this.myColor === 'pink' ? '#289FDB' : 'pink';
  }

  constructor() {
    this.myColor = 'pink';
  }
}
