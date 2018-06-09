import {Component} from '@angular/core';
import {MyDataService} from './services/my-data.service';

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
  casinoAdditional = '<span [style.opacity]="myClassCasino.length%10 / 10">♥</span>';
  casinoStyle = `.yellow-text { color: yellow; } .blue-text { color: deepskyblue; }`;
  myClassCasino = 'blue-text';

  constructor(private dataService: MyDataService) {
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

  // ------------------------------------------------------------------------------------------------------ Part 3
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
  directiveHTMLappStruct = `<span *appMyStructDirective>Текст, который появляется с запозданием.</span>`;

  exportTS = `
  @Directive({
    selector: '[appMyDirective]',
    exportAs: 'myExport'
  })`;
  exportHTMLbtn = `<button (click)="myDir.myColor='yellow'">Be yellow!</button>`;
  exportHTMLelem = `<span appMyDirective #myDir="myExport">Click me and i will change color.</span>`;

  // ------------------------------------------------------------------------------------------------------ Part 4
  getAllWords() {
    return this.dataService.getData();
  }
  addWord(word: string) {
    this.dataService.addData(word);
  }

  serviceTSmodule = `providers: [MyDataService]`;
  serviceTS = `
  export class MyDataService {
  
    constructor() { }
  
    private data = [
      {word: 'Hello'},
      {word: 'World!'}
    ];
  
    getData() {
      return this.data;
    }
  
    addData(word: string) {
      this.data.push({ word });
    }
  }`;
  serviceTSapp = `
  constructor(private dataService: MyDataService) { }
  
  getAllWords() {
    return this.dataService.getData();
  }
  addWord(word: string) {
    this.dataService.addData(word);
  }`;
  serviceHTMLapp1 = `Words from dataService: <span *ngFor="let item of getAllWords()">{{ item.word }} </span>`;
  serviceHTMLapp2 = `<input type="text" (keyup.enter)="addWord($event.target.value)">`;

  getDataHttp() {
    return this.dataService.getDataHttp();
  }

  httpTSmodule = `imports: [HttpClientModule]`;
  serviceTShttp = `
  @Injectable()
  export class MyDataService {
    private dataFromHttp = ['Existing string'];
  
    constructor(private _http: HttpClient) {
      this._http.get('https://jsonplaceholder.typicode.com/users')
                .subscribe(users => {for (const key in users) this.dataFromHttp.push(users[key].username)});
    }
  
    getDataHttp() {
      return this.dataFromHttp;
    }`;
  serviceTSapphttp = `
  getDataHttp() {
    return this.dataService.getDataHttp();
  }`;
  serviceHTMLapphttp = `Data from Http: <span *ngFor="let item of getDataHttp()">{{ item }} </span>`;
}
