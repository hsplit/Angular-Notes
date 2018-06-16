import {Component} from '@angular/core';
import {MyDataService} from './services/my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  x = 5;
  filter;

  newTitleApp(str) {
    this.title = str;
  }

  myClick(e) {
    alert('timeStamp = ' + e.timeStamp);
  }

  constructor(private dataService: MyDataService) {
    setInterval(() => {
      this.myClassCasino = this.myClassCasino === 'blue-text' ? 'yellow-text' : 'blue-text';
    }, 500);

    this.filter = this.dataService.getDafalutFilter();
  }

  getAllWords() {
    return this.dataService.getData();
  }
  addWord(word: string) {
    this.dataService.addData(word);
  }

  getDataHttp() {
    return this.dataService.getDataHttp();
  }
  getDataHttpObj() {
    return this.dataService.getDataHttpObj();
  }

















  /**
   * Наполнение HTML
   */
  // ------------------------------------------------------------------------------------------------------ Part 1
  interpTS = 'class AppComponent { x = 5; }';
  interpHTML = '<span>x + 10 = {{ x + 10 }}</span>';

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

  eventTS = `
  class AppComponent {
    myClick(e) {
      alert('timeStamp = ' + e.timeStamp);
    }
  }`;
  eventHTML = '<span (click)="myClick($event)">Click me!</span>';
  eventInputHTML = `Color: <input type="text" (input)="$event.target.style.backgroundColor = $event.target.value">`;

  linkHTML = `<span #mySpan>Color: </span><input type="text" (input)="mySpan.style.color = $event.target.value">`;

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

  httpTSmodule = `imports: [HttpClientModule]`;
  serviceTShttp = `
  @Injectable()
  export class MyDataService {
    private dataFromHttp = [];
  
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

  // ------------------------------------------------------------------------------------------------------ Part 5
  pipeHTMLuserFiler1 = `<label>Search: <input type="search" [(ngModel)]="filter.name" value=""></label>`;
  pipeHTMLuserFiler2 = `ID: <label>from <input style="width: 45px;" type="number" [(ngModel)]="filter.idmin"></label>`;
  pipeHTMLuserFiler3 = `<label> to <input style="width: 45px;" type="number" [(ngModel)]="filter.idmax"></label>`;
  pipeTSuserFilterComponent = `
  export class UserFilterComponent {
    @Input() filter;
  }`;
  pipeAppHTML1 = `<user-filter [filter]="filter"></user-filter>`;
  pipeAppHTML2 = `<ul><li *ngFor="let user of getDataHttpObj() | userFilter:filter">{{ user.id }} {{ user.name }}</li></ul>`;

  pipeService = `
  getDafalutFilter () {
    return {
      name: '',
      idmin: 1,
      idmax: 10
    };
  }`;

  pipeTS = `
  const filters = [
    (user, filter) => user.name.toUpperCase().includes(filter.name.toUpperCase()),
    (user, filter) => user.id <= filter.idmax && user.id >= filter.idmin
  ];
  
  @Pipe({
    name: 'userFilter',
    pure: false
  })
  export class UserFilterPipe implements PipeTransform {
  
    transform(value: any, filter: any): any {
      return value.filter( user => {
        return filters.every(filterFunction => filterFunction(user, filter));
      });
    }
  
  }`;
  // ------------------------------------------------------------------------------------------------------ Part 6
  lSwitchTS = `
  export class LanguageSwitcherComponent {
    languageList: Array<LanguageDescription>;
    date;
  
    constructor(private localizationService: LocalizationService) {
      this.languageList = localizationService.getLanguageList();
      this.date = Date.now();
      setInterval( () => {
        this.date = Date.now();
      }, 1000);
    }
    getCurrentLocalization() {
      return this.localizationService.getCurrentLocalization();
    }
  
    get currentLanguage() {
      return this.localizationService.currentLanguage;
    }
  
    set currentLanguage(code) {
      this.localizationService.setCurrentLocalization(code);
    }
  }`;
  lSwitchHTML = `
  <select [(ngModel)]="currentLanguage">
  <option *ngFor="let language of languageList"
            [value]="language.code">{{ language.title }}</option>
  </select>
  <span> {{ currentLanguage }}</span><br> <span>Settings: {{ getCurrentLocalization() | json }}</span><br>
  Date: {{ date }}
  <div>ShortDate: {{ date | date:'shortDate' }}</div>
  <div>MediumDate: {{ date | date:'mediumDate' }}</div>
  <div>LongDate: {{ date | date:'longDate' }}</div>
  <div>ShortTime: {{ date | date:'shortTime' }}</div>
  <hr>
  <div>{{ 'Date' | translate:currentLanguage }}: {{ date | dateFormat:currentLanguage }}</div>
  <div>{{ 'Time' | translate:currentLanguage }}: {{ date | dateFormat:currentLanguage:true }}</div>
  `;

  interfaceTS = `
  export interface LanguageDescription {
    title: string;
    code: string;
    isRtl: boolean;
  }`;

  localizServiceTS = `
  export class LocalizationService {
    currentLanguage = 'ru-RU';
    private languages = new Map<string, LanguageDescription>([
      ['ru-RU', {
        title: 'Русский',
        code: 'ru-RU',
        isRtl: false
      }],
      ['en-US', {
        title: 'English (US)',
        code: 'en-US',
        isRtl: false
      }],
      ['en-GB', {
        title: 'English (GB)',
        code: 'en-GB',
        isRtl: false
      }]
    ]);
    private words = new Map<string, any> ([
      ['ru-RU', {
        'Date': 'Дата',
        'Time': 'Время'
      }]
    ]);
  
    getWord(word: string): string {
      if (this.words.has(this.currentLanguage)) {
        if (this.words.get(this.currentLanguage)[word]) {
          return this.words.get(this.currentLanguage)[word];
        } else {
          return word;
        }
      } else {
        return word;
      }
    }
  
    getLanguageList(): Array<LanguageDescription> {
      return [...this.languages.values()];
    }
  
    setCurrentLocalization(code: string) {
      if (this.languages.has(code)) {
        this.currentLanguage = code;
      }
    }
  
    getCurrentLocalization(): LanguageDescription {
      return this.languages.get(this.currentLanguage);
    }
  }`;

  pipeDate = `
  export class DateFormatPipe implements PipeTransform {
    dateFormatter: DateTimeFormat;
  
    transform(date: Date, code: string, kind?: boolean) {
      this.dateFormatter = kind ? new Intl.DateTimeFormat(code, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }) : new Intl.DateTimeFormat(code);
      return this.dateFormatter.format(date);
    }
  
  }`;
  pipeTranslate = `
  export class TranslatePipe implements PipeTransform {
    constructor(private localizationService: LocalizationService) { }
  
    transform(word: string, args?: any): string {
      return this.localizationService.getWord(word);
    }
  }`;

  // ------------------------------------------------------------------------------------------------------ Part 7
  routerModule = `
  import { RouterModule, Routes } from '@angular/router';
  
  const routes: Routes = [
    { path: 'my-component', component: MyComponentComponent },
    { path: 'language-switcher', component: LanguageSwitcherComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRouterModule { }
  `;

  routerApp = `
  import { AppRouterModule } from './modules/router/router.module';
  @NgModule({
    ...
    imports: [
      ...
      AppRouterModule
    ]
  })
  `;

  routerHTML = `
  Menu: <a class="link" routerLink="/my-component" routerLinkActive="link-active">my-component</a>
              <a class="link" routerLink="/language-switcher" routerLinkActive="link-active">language-switcher</a>
              <a class="link" routerLink="/not-exist">not-exist</a>
              
   <router-outlet><h1>Hello. I am inside router-outlet.</h1></router-outlet>
        
  Custom <a [routerLink]="'/item/' + item.id">
  `;

  routerParams = `
  router
  path: 'item/:id', component: ItemComponent
  ----------------------------------------------------------
  
  item-component
  constructor(private roure: ActivatedRoute) {
    this.roure.params.subscribe(params => this.id = params.id);
  };
  `;

  routerStyle = `
  .link-active {
    color: deepskyblue;
  }
  `;
}
