import {Component} from '@angular/core';

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
}
