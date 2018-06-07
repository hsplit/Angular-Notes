import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  @Input() message: string;
  @Output() newTitleMy = new EventEmitter();
  goOut(str) {
    this.newTitleMy.emit(str);
  }

  @Input() titleMy: string;
  @Output() titleMyChange = new EventEmitter();
  goOutInput(str) {
    this.titleMyChange.emit(str);
  }

  inputTS = `@Input() message: string;`;
  inputHTMLparent = `<my-component [message]="\'Hello world!\'"></my-component>`;
  inputHTMLchild = '<span>Входящая переменная message = {{ message }}</span>';

  ngIfHTMLcontroll = `<label>Part two <input type="checkbox" #Part2 checked></label>`;
  ngIfHTML = `<div *ngIf="Part2.checked">...</div>`;

  ngForHTML = `<ul> <li *ngFor="let item of ['one','two','three']"> {{item}} </li> </ul>`;

  outputTSparent = `
  title = 'app';
  
  newTitleApp(str) {
    this.title = str;
  }`;
  outputHTMLparent = `<my-component (newTitleMy)="newTitleApp($event)"></my-component>`;
  outputTSchild = `
  @Output() newTitleMy = new EventEmitter();
  
  goOut(str) {
    this.newTitleMy.emit(str);
  }`;
  outputHTMLchild = `Пойдет наверх после изменения в title: <input type="text" (input)="goOut($event.target.value)">`;

  localTitle = 'I here';
  localTS = `localTitle = 'I here';`;
  localHTML = `Локальная двусторонняя привязка: <input type="text" [(ngModel)]="localTitle"> {{ localTitle }}`;

  ioHTMLparent = `<my-component [(titleMy)]="title"></my-component>`;
  ioHTMLchild = `<input type="text" (input)="goOutInput($event.target.value)" [(ngModel)]="titleMy" value="{{ titleMy }}"> {{ titleMy }}`;
  ioTS = `
  @Input() titleMy: string;
  @Output() titleMyChange = new EventEmitter();
  
  goOutInput(str) {
    this.titleMyChange.emit(str);
  }`;

  ngContentHTMLparent = `<my-component> <H3>Loading...</H3> </my-component>`;
  ngContentHTMLchild = `<ng-content></ng-content>`;
  ngContentHTMLchildCustom = `<ng-content select="h3"></ng-content>`;
}
