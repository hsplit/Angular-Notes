import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  newTitleApp(str) {
    this.title = str;
  }

  interpTS = 'class AppComponent { x = 5; }';
  interpHTML = '<span>x + 10 = {{ x + 10 }}</span>';
  x = 5;

  bindTS = `class AppComponent { myClass = 'green-text'; }`;
  bindHTML = '<span [class]="myClass">Hello</span>';
  bindStyle = `.green-text { color: forestgreen; }`;
  myClass = 'green-text';

  // noinspection TsLint
  casinoTS = `
  class AppComponent {
    myClassCasino = 'blue-text'; 
    
    constructor() {
      setInterval(() => {
        this.myClassCasino = this.myClassCasino === 'blue-text' ? 'yellow-text' : 'blue-text';
      }, 500);
    }
  }`;
  casinoHTML = '<span [class]="myClassCasino">JoyCasino</span>';
  casinoAdditional = '<span [style.opacity]="myClassCasino.length%10/10">♥</span>';
  casinoStyle = `.yellow-text { color: yellow; } .blue-text { color: deepskyblue; }`;
  myClassCasino = 'blue-text';

  constructor() {
    setInterval(() => {
      this.myClassCasino = this.myClassCasino === 'blue-text' ? 'yellow-text' : 'blue-text';
    }, 500);
  }

  eventTS = `
  class AppComponent {
    myClick(e) {
      alert('timeStamp = ' + e.timeStamp);
    }
  }`;
  eventHTML = '<span (click)="myClick($event)">Click me!</span>';
  eventInputHTML = `Color: <input type="text" (input)="$event.target.style.backgroundColor = $event.target.value">`;

  linkHTML = `<span #mySpan>Color: </span><input type="text" (input)="mySpan.style.color = $event.target.value">`;

  myClick(e) {
    alert('timeStamp = ' + e.timeStamp);
  }

  // Part 3 -------------------------------------------------------------
  directiveCaption = `@Directive ({ selector: '[appMyDirective]' })`;
  directiveTSbind = `
  export class MyDirectiveDirective {
    @HostBinding('style.color') myColor: string;
  
    constructor() {
      this.myColor = 'pink';
    }
  }`;
  directiveTSlisten = `
  @HostListener('click', ['$event']) changeColor(event) {
    this.myColor = this.myColor === 'pink' ? '#289FDB' : 'pink';
  }`;
  directiveHTMLapp = `<span appMyDirective>I will pink</span>`;

  directiveCaptionStruct = `@Directive({ selector: '[appMyStructDirective]' })`;
  directiveTSStruct = `
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
  }`;
  directiveHTMLappStruct = `<span *appMyStructDirective>Click me and i will change color.</span>`;

  exportTS = `
  @Directive({
    selector: '[appMyDirective]',
    exportAs: 'myExport'
  })`;
  exportHTMLbtn = `<button (click)="myDir.myColor='yellow'">Be yellow!</button>`;
  exportHTMLelem = `<span appMyDirective #myDir="myExport">Click me and i will change color.</span>`;
}
