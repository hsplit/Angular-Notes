(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #2B2B2B; position: fixed; top: 0; width: 100vw; height: 5px;\"></div>\n<div style=\"border: 1px solid #f00; position: sticky; top: 5px; background: #2B2B2B;\">\n  <span class=\"link-source\">Source on GitHub: <a href=\"https://github.com/hsplit/angular-notes\" target=\"_blank\">https://github.com/hsplit/angular-notes</a></span>\n  <h1 style=\"margin: 0; display: inline-block;\"><b>Welcome to {{ title }}!</b></h1>\n  <img width=\"35\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  <div class=\"parst\">\n    <div class=\"part\">\n      <label routerLink=\"/\">Read Me<input type=\"checkbox\" #Readme [(ngModel)]=\"parts[0]\"></label>\n      <a routerLink=\"/\" [queryParams]=\"{parts: 0}\"> only</a>\n    </div>\n    <div class=\"part\">\n      <label routerLink=\"/\">Part one <input type=\"checkbox\" #Part1 [(ngModel)]=\"parts[1]\"></label>\n      <a style=\"color: #BBBBBB\" routerLink=\"/\" [queryParams]=\"{parts: 1}\"> only</a>\n    </div>\n    <div class=\"part\">\n      <label routerLink=\"/\">Part two <input type=\"checkbox\" #Part2 [(ngModel)]=\"parts[2]\"></label>\n      <a style=\"color: #BBBBBB\" routerLink=\"/\" [queryParams]=\"{parts: 2}\"> only</a>\n    </div>\n    <div class=\"part\">\n      <label routerLink=\"/\">Part three <input type=\"checkbox\" #Part3 [(ngModel)]=\"parts[3]\"></label>\n      <a style=\"color: #BBBBBB\" routerLink=\"/\" [queryParams]=\"{parts: 3}\"> only</a>\n    </div>\n    <div class=\"part\">\n      <label routerLink=\"/\">Part four <input type=\"checkbox\" #Part4 [(ngModel)]=\"parts[4]\"></label>\n      <a style=\"color: #BBBBBB\" routerLink=\"/\" [queryParams]=\"{parts: 4}\"> only</a>\n    </div>\n    <div class=\"part\">\n      <label routerLink=\"/\">Part five <input type=\"checkbox\" #Part5 [(ngModel)]=\"parts[5]\"></label>\n      <a style=\"color: #BBBBBB\" routerLink=\"/\" [queryParams]=\"{parts: 5}\"> only</a>\n    </div>\n    <div class=\"part\">\n      <label routerLink=\"/\">Part six <input type=\"checkbox\" #Part6 [(ngModel)]=\"parts[6]\"></label>\n      <a style=\"color: #BBBBBB\" routerLink=\"/\" [queryParams]=\"{parts: 6}\"> only</a>\n    </div>\n    <div class=\"part\">\n      <label routerLink=\"/\">Part seven <input type=\"checkbox\" #Part7 [(ngModel)]=\"parts[7]\"></label>\n      <a style=\"color: #BBBBBB\" routerLink=\"/\" [queryParams]=\"{parts: 7}\"> only</a>\n    </div>\n  </div>\n</div>\n<div>\n  <div *ngIf=\"Readme.checked\" class=\"readme\">\n    Source on GitHub: <a href=\"https://github.com/hsplit/Angular-Notes\" target=\"_blank\">https://github.com/hsplit/Angular-Notes</a><br><br>\n    Part1: <span>Интерполяция, data bind, event, link.</span><br>\n    Part2: <span>Component, @Input, *ngIf, *ngFor, @Output, Double Bind - ngModel, ng-content.</span><br>\n    Part3: <span>Directive, exportAs, структурная директива.</span><br>\n    Part4: <span>Service, HttpClientModule.</span><br>\n    Part5: <span>Pipe.</span><br>\n    Part6: <span>Localization.</span><br>\n    Part7: <span>Routes.</span><br>\n    <br>\n    Create project: <span>ng new angular-notes --style=scss</span><br>\n    Configure if created without --style: <span>ng set defaults.styleExt scss</span><br>\n    Or edit file angular.json: <span>example in <a href=\"https://github.com/hsplit/Angular-Notes\">readme.md</a></span><br>\n    <br>\n    Create component: <span>ng g c my-component</span><br>\n    Create directive: <span>ng g d my-directive</span><br>\n    Create service: <span>ng g s my-data</span><br>\n    Create pipe: <span>ng g p user-filter</span><br>\n    Create interface: <span>ng g i localizations-interfaces</span><br>\n    Create module: <span>ng g m router</span>\n  </div>\n  <div *ngIf=\"Part1.checked\">\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Интерполяция</b> <span>{{</span> выражение <span>}}</span></div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ interpTS }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ interpHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b> x + 10 = {{ x + 10 }}</div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Data bind</b> [атрибут] = \"выражение\" </div>\n      <div class=\"style\"><b class=\"caption\">Style</b> {{ bindStyle }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ bindTS }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ bindHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b> <span [class]=\"myClass\">Hello</span> </div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">JoyCasino\n        <span [style.opacity]=\"myClassCasino.length%10/10\">♥</span></b>  Data bind + setInterval\n      </div>\n      <div class=\"style\"><b class=\"caption\">Style</b> {{ casinoStyle }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ casinoTS }} </div>\n      <div class=\"html\">\n        <b class=\"caption\">HTML</b> {{ casinoHTML }} <br>\n        <b class=\"caption\"></b> {{ casinoAdditional }}\n      </div>\n      <div class=\"result\"><b class=\"caption\">Result</b><span [class]=\"myClassCasino\">JoyCasino</span></div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Event</b> (событие) = \"выражение\" </div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ eventTS }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ eventHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b> <span (click)=\"myClick($event)\"> Click me!</span> </div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ eventInputHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        Color: <input type=\"text\" (input)=\"$event.target.style.backgroundColor = $event.target.value\" value=\"#E03136\">\n      </div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Ссылки</b> #название </div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ linkHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        <span #mySpan> Color: </span>\n        <input type=\"text\" (input)=\"mySpan.style.color = $event.target.value\" value=\"#E03136\">\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"Part2.checked\">\n    <hr style=\"background: #f00; height: 2px; border: none;\">\n    <my-component [message]=\"'Hello world!'\" (newTitleMy)=\"newTitleApp($event)\" [(titleMy)]=\"title\">\n      <H3>Loading...</H3>\n    </my-component>\n  </div>\n  <div *ngIf=\"Part3.checked\">\n    <hr style=\"background: #f00; height: 2px; border: none;\">\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Directive</b> {{ directiveCaption }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS Bind</b> {{ directiveTSbind }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS Listen</b> {{ directiveTSlisten }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML app</b> {{ directiveHTMLapp }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        <span appMyDirective style=\"user-select: none; cursor: pointer;\">Click me and i will change color.</span>\n      </div>\n      <div class=\"note\"><b class=\"caption\">Примечание</b><br>При использовании директивы она создается каждый раз. Т.е. если создать поле count, то оно будет разным в разных местах где применена директива.</div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Directive export</b> </div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ exportTS }}</div>\n      <div class=\"html\">\n        <b class=\"caption\">HTML app</b> {{ exportHTMLbtn }} <br>\n        <b class=\"caption\"></b> {{ exportHTMLelem }}\n      </div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        <button (click)=\"myDir.myColor='yellow'\">Be yellow!</button>\n        <span appMyDirective #myDir=\"myExport\" style=\"user-select: none; cursor: pointer;\"> Click me and i will change color.</span>\n      </div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">*Directive</b> {{ directiveCaptionStruct }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ directiveTSStruct }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML app</b> {{ directiveHTMLappStruct }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        <label style=\"cursor: pointer; text-decoration: underline;\">Отрисовано <input type=\"checkbox\" #refresh checked></label>\n        <span *ngIf=\"refresh.checked\">\n          <span *appMyStructDirective>Текст, который появляется с запозданием.</span>\n        </span>\n      </div>\n      <div class=\"note\"><b class=\"caption\">Примечание</b><br>Директива добавляет отображение с задержкой, чтобы пронаблюдать нужно снять и поставить флаг у \"Отрисовано\", и с задержкой будет отображен элемент. Можно также передавать параметры через @Input, в HTML это будет записано например так: *appMyStructDirective=\"параметр\".</div>\n    </div>\n  </div>\n  <div *ngIf=\"Part4.checked\">\n    <hr style=\"background: #f00; height: 2px; border: none;\">\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Service</b> {{ serviceTSmodule }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS service</b> {{ serviceTS }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS app.comp</b> {{ serviceTSapp }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ serviceHTMLapp1 }}</div>\n      <div class=\"html\"><b class=\"caption\"></b> {{ serviceHTMLapp2 }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        Words from dataService: <span *ngFor=\"let item of getAllWords()\">{{ item.word }} </span>\n      </div>\n      <div class=\"result\"><b class=\"caption\"></b>\n        Нажать Enter для добавления слова в сервис:\n        <input type=\"text\" (keyup.enter)=\"addWord($event.target.value)\">\n      </div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">HttpClientModule</b> {{ httpTSmodule }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS service</b> {{ serviceTShttp }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS app.comp</b> {{ serviceTSapphttp }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ serviceHTMLapphttp }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        Data from Http: <span *ngFor=\"let item of getDataHttp()\">{{ item }} </span>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"Part5.checked\">\n    <hr style=\"background: #f00; height: 2px; border: none;\">\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Pipe</b> </div>\n      <div class=\"ts\"><b class=\"caption\">TS pipe</b> {{ pipeTS }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS service</b> {{ pipeService }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS filter-comp</b> {{ pipeTSuserFilterComponent }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML filter-comp</b> {{ pipeHTMLuserFiler1 }}</div>\n      <div class=\"html\"><b class=\"caption\"></b> {{ pipeHTMLuserFiler2 }}</div>\n      <div class=\"html\"><b class=\"caption\"></b> {{ pipeHTMLuserFiler3 }}</div>\n      <div class=\"html\"><b class=\"caption\"></b> {{ pipeHTMLuserFiler3 }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML app</b> {{ pipeAppHTML1 }}</div>\n      <div class=\"html\"><b class=\"caption\"></b> {{ pipeAppHTML2 }}</div>\n      <hr>\n      <user-filter [filter]=\"filter\"></user-filter>\n      <ul><li *ngFor=\"let user of getDataHttpObj() | userFilter:filter\">{{ user.id }} {{ user.name }}</li></ul>\n      <div class=\"result\">\n        Without filter: <ul><li *ngFor=\"let item of getDataHttpObj()\">{{ item.name }} </li></ul>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"Part6.checked\">\n    <hr style=\"background: #f00; height: 2px; border: none;\">\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Localization</b> </div>\n      <language-switcher></language-switcher>\n      <hr>\n      <div class=\"ts\"><b class=\"caption\">TS interface</b> {{ interfaceTS }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS component</b> {{ lSwitchTS }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML component</b> {{ lSwitchHTML }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS service</b> {{ localizServiceTS }}</div>\n      <div class=\"ts\"><b class=\"caption\">Pipe Date</b> {{ pipeDate }}</div>\n      <div class=\"ts\"><b class=\"caption\">Pipe translate</b> {{ pipeTranslate }}</div>\n    </div>\n  </div>\n  <div *ngIf=\"Part7.checked\">\n    <hr style=\"background: #f00; height: 2px; border: none;\">\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Routes</b> </div>\n      <div class=\"result\">\n        Menu: <a class=\"link\" routerLink=\"/my-component\" routerLinkActive=\"link-active\">my-component</a>\n              <a class=\"link\" routerLink=\"/language-switcher\" routerLinkActive=\"link-active\">language-switcher</a>\n              <a class=\"link\" routerLink=\"/not-exist\">not-exist</a>\n      </div>\n      <router-outlet><h1>Hello. I am inside router-outlet.</h1></router-outlet>\n    </div>\n    <div class=\"block\">\n      <div class=\"ts\"><b class=\"caption\">TS router.module</b> {{ routerModule }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS app.module</b> {{ routerApp }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ routerHTML }}</div>\n      <div class=\"style\"><b class=\"caption\">Style</b> {{ routerStyle }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS params</b> {{ routerParams }}</div>\n      <div class=\"note\"><b class=\"caption\">routesQuery</b> {{ routesQuery }}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #2B2B2B;\n  color: #BBBBBB; }\n\n.link-source {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  float: right;\n  margin: 2px 5px; }\n\n.link-source a {\n    color: #BBBBBB; }\n\n.readme {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  padding: 5px;\n  color: #E7BE5F; }\n\n.readme a {\n    color: #BBBBBB; }\n\n.readme span {\n    color: #BBBBBB; }\n\n.parst {\n  display: flex;\n  flex-wrap: wrap; }\n\n.part {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  display: inline-block;\n  border-bottom: 1px solid forestgreen;\n  margin: 5px; }\n\n.part label, .part a {\n    cursor: pointer;\n    text-decoration: none;\n    color: #BBBBBB; }\n\n.part label:hover, .part a:hover {\n      text-decoration: underline; }\n\n.part label input, .part a input {\n      cursor: pointer; }\n\n.green-text {\n  color: forestgreen; }\n\n.yellow-text {\n  color: yellow; }\n\n.blue-text {\n  color: deepskyblue; }\n\n.block {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 14px;\n  color: #4677a6;\n  border: 1px solid #5F9F4D;\n  margin: 5px 0;\n  padding: 3px;\n  white-space: pre-wrap; }\n\n.block .html {\n    color: #E7BE5F; }\n\n.block .style {\n    color: #6897BB; }\n\n.block .ts {\n    color: #9876AA; }\n\n.block .result {\n    color: white; }\n\n.block .result .link {\n      color: #BBBBBB;\n      margin: 0 5px; }\n\n.block .result .link-active {\n      color: deepskyblue; }\n\n.block .note {\n    color: #81BF23; }\n\n.block .caption {\n    display: inline-block;\n    width: 120px;\n    margin-top: 3px;\n    color: #BBBBBB; }\n\n.block .caption_first {\n      text-decoration: underline;\n      margin: 0 0 3px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_my_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/my-data.service */ "./src/app/services/my-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AppComponent = class AppComponent {
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.title = 'app';
        this.x = 5;
        // query routes
        this.parts = [true, false, false, false, false, false, false, false];
        /**
         * Наполнение HTML
         */
        // ------------------------------------------------------------------------------------------------------ Part 1
        this.interpTS = 'class AppComponent { x = 5; }';
        this.interpHTML = '<span>x + 10 = {{ x + 10 }}</span>';
        this.bindTS = `class AppComponent { myClass = 'green-text'; }`;
        this.bindHTML = '<span [class]="myClass">Hello</span>';
        this.bindStyle = `.green-text { color: forestgreen; }`;
        this.myClass = 'green-text';
        // noinspection TsLint
        this.casinoTS = `
  class AppComponent {
    myClassCasino = 'blue-text'; 
    
    constructor() {
      setInterval(() => {
        this.myClassCasino = this.myClassCasino === 'blue-text' ? 'yellow-text' : 'blue-text';
      }, 500);
    }
  }`;
        this.casinoHTML = '<span [class]="myClassCasino">JoyCasino</span>';
        this.casinoAdditional = '<span [style.opacity]="myClassCasino.length%10 / 10">♥</span>';
        this.casinoStyle = `.yellow-text { color: yellow; } .blue-text { color: deepskyblue; }`;
        this.myClassCasino = 'blue-text';
        this.eventTS = `
  class AppComponent {
    myClick(e) {
      alert('timeStamp = ' + e.timeStamp);
    }
  }`;
        this.eventHTML = '<span (click)="myClick($event)">Click me!</span>';
        this.eventInputHTML = `Color: <input type="text" (input)="$event.target.style.backgroundColor = $event.target.value">`;
        this.linkHTML = `<span #mySpan>Color: </span><input type="text" (input)="mySpan.style.color = $event.target.value">`;
        // ------------------------------------------------------------------------------------------------------ Part 3
        this.directiveCaption = `@Directive ({ selector: '[appMyDirective]' })`;
        this.directiveTSbind = `
  export class MyDirectiveDirective {
    @HostBinding('style.color') myColor: string;
  
    constructor() {
      this.myColor = 'pink';
    }
  }`;
        this.directiveTSlisten = `
  @HostListener('click', ['$event']) changeColor(event) {
    this.myColor = this.myColor === 'pink' ? '#289FDB' : 'pink';
  }`;
        this.directiveHTMLapp = `<span appMyDirective>I will pink</span>`;
        this.directiveCaptionStruct = `@Directive({ selector: '[appMyStructDirective]' })`;
        this.directiveTSStruct = `
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
        this.directiveHTMLappStruct = `<span *appMyStructDirective>Текст, который появляется с запозданием.</span>`;
        this.exportTS = `
  @Directive({
    selector: '[appMyDirective]',
    exportAs: 'myExport'
  })`;
        this.exportHTMLbtn = `<button (click)="myDir.myColor='yellow'">Be yellow!</button>`;
        this.exportHTMLelem = `<span appMyDirective #myDir="myExport">Click me and i will change color.</span>`;
        // ------------------------------------------------------------------------------------------------------ Part 4
        this.serviceTSmodule = `providers: [MyDataService]`;
        this.serviceTS = `
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
        this.serviceTSapp = `
  constructor(private dataService: MyDataService) { }
  
  getAllWords() {
    return this.dataService.getData();
  }
  addWord(word: string) {
    this.dataService.addData(word);
  }`;
        this.serviceHTMLapp1 = `Words from dataService: <span *ngFor="let item of getAllWords()">{{ item.word }} </span>`;
        this.serviceHTMLapp2 = `<input type="text" (keyup.enter)="addWord($event.target.value)">`;
        this.httpTSmodule = `imports: [HttpClientModule]`;
        this.serviceTShttp = `
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
        this.serviceTSapphttp = `
  getDataHttp() {
    return this.dataService.getDataHttp();
  }`;
        this.serviceHTMLapphttp = `Data from Http: <span *ngFor="let item of getDataHttp()">{{ item }} </span>`;
        // ------------------------------------------------------------------------------------------------------ Part 5
        this.pipeHTMLuserFiler1 = `<label>Search: <input type="search" [(ngModel)]="filter.name" value=""></label>`;
        this.pipeHTMLuserFiler2 = `ID: <label>from <input style="width: 45px;" type="number" [(ngModel)]="filter.idmin"></label>`;
        this.pipeHTMLuserFiler3 = `<label> to <input style="width: 45px;" type="number" [(ngModel)]="filter.idmax"></label>`;
        this.pipeTSuserFilterComponent = `
  export class UserFilterComponent {
    @Input() filter;
  }`;
        this.pipeAppHTML1 = `<user-filter [filter]="filter"></user-filter>`;
        this.pipeAppHTML2 = `<ul><li *ngFor="let user of getDataHttpObj() | userFilter:filter">{{ user.id }} {{ user.name }}</li></ul>`;
        this.pipeService = `
  getDafalutFilter () {
    return {
      name: '',
      idmin: 1,
      idmax: 10
    };
  }`;
        this.pipeTS = `
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
        this.lSwitchTS = `
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
        this.lSwitchHTML = `
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
        this.interfaceTS = `
  export interface LanguageDescription {
    title: string;
    code: string;
    isRtl: boolean;
  }`;
        this.localizServiceTS = `
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
        this.pipeDate = `
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
        this.pipeTranslate = `
  export class TranslatePipe implements PipeTransform {
    constructor(private localizationService: LocalizationService) { }
  
    transform(word: string, args?: any): string {
      return this.localizationService.getWord(word);
    }
  }`;
        // ------------------------------------------------------------------------------------------------------ Part 7
        this.routerModule = `
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
        this.routerApp = `
  import { AppRouterModule } from './modules/router/router.module';
  @NgModule({
    ...
    imports: [
      ...
      AppRouterModule
    ]
  })
  `;
        this.routerHTML = `
  Menu: <a class="link" routerLink="/my-component" routerLinkActive="link-active">my-component</a>
              <a class="link" routerLink="/language-switcher" routerLinkActive="link-active">language-switcher</a>
              <a class="link" routerLink="/not-exist">not-exist</a>
              
   <router-outlet><h1>Hello. I am inside router-outlet.</h1></router-outlet>
        
  Custom <a [routerLink]="'/item/' + item.id">
  `;
        this.routerParams = `
  router
  path: 'item/:id', component: ItemComponent
  ----------------------------------------------------------
  
  item-component
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);
  };
  `;
        this.routerStyle = `
  .link-active {
    color: deepskyblue;
  }
  `;
        this.routesQuery = `
  this.route.queryParams.subscribe(params => console.log(params));
  `;
        setInterval(() => {
            this.myClassCasino = this.myClassCasino === 'blue-text' ? 'yellow-text' : 'blue-text';
        }, 500);
        this.filter = this.dataService.getDafalutFilter();
        this.route.queryParams.subscribe(params => {
            if (params['parts']) {
                for (let i = 0; i < this.parts.length; i++) {
                    this.parts[i] = params['parts'].includes(i);
                }
            }
        });
    }
    newTitleApp(str) {
        this.title = str;
    }
    myClick(e) {
        alert('timeStamp = ' + e.timeStamp);
    }
    getAllWords() {
        return this.dataService.getData();
    }
    addWord(word) {
        this.dataService.addData(word);
    }
    getDataHttp() {
        return this.dataService.getDataHttp();
    }
    getDataHttpObj() {
        return this.dataService.getDataHttpObj();
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_my_data_service__WEBPACK_IMPORTED_MODULE_1__["MyDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-component/my-component.component */ "./src/app/components/my-component/my-component.component.ts");
/* harmony import */ var _directives_my_directive_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/my-directive.directive */ "./src/app/directives/my-directive.directive.ts");
/* harmony import */ var _directives_my_struct_directive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/my-struct-directive.directive */ "./src/app/directives/my-struct-directive.directive.ts");
/* harmony import */ var _services_my_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/my-data.service */ "./src/app/services/my-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pipes_user_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/user-filter.pipe */ "./src/app/pipes/user-filter.pipe.ts");
/* harmony import */ var _components_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-filter/user-filter.component */ "./src/app/components/user-filter/user-filter.component.ts");
/* harmony import */ var _components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/language-switcher/language-switcher.component */ "./src/app/components/language-switcher/language-switcher.component.ts");
/* harmony import */ var _services_localization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/localization.service */ "./src/app/services/localization.service.ts");
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/date-format.pipe */ "./src/app/pipes/date-format.pipe.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var _modules_router_router_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/router/router.module */ "./src/app/modules/router/router.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_4__["MyComponentComponent"],
            _directives_my_directive_directive__WEBPACK_IMPORTED_MODULE_5__["MyDirectiveDirective"],
            _directives_my_struct_directive_directive__WEBPACK_IMPORTED_MODULE_6__["MyStructDirectiveDirective"],
            _pipes_user_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["UserFilterPipe"],
            _components_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_10__["UserFilterComponent"],
            _components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_11__["LanguageSwitcherComponent"],
            _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_13__["DateFormatPipe"],
            _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _modules_router_router_module__WEBPACK_IMPORTED_MODULE_15__["AppRouterModule"]
        ],
        providers: [
            _services_my_data_service__WEBPACK_IMPORTED_MODULE_7__["MyDataService"], _services_localization_service__WEBPACK_IMPORTED_MODULE_12__["LocalizationService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/language-switcher/language-switcher.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/language-switcher/language-switcher.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getCurrentLocalization().isRtl ? 'australian-rtl' : ''\">\n  <select [(ngModel)]=\"currentLanguage\">\n  <option *ngFor=\"let language of languageList\"\n          [value]=\"language.code\">{{ language.title }}</option>\n  </select>\n  <span> {{ currentLanguage }}</span><br> <span>Settings: {{ getCurrentLocalization() | json }}</span><br>\n  Date: {{ date }}\n  <div>ShortDate: {{ date | date:'shortDate' }}</div>\n  <div>MediumDate: {{ date | date:'mediumDate' }}</div>\n  <div>LongDate: {{ date | date:'longDate' }}</div>\n  <div>ShortTime: {{ date | date:'shortTime' }}</div>\n  <hr>\n  <div>{{ 'Date' | translate:currentLanguage }}: {{ date | dateFormat:currentLanguage }}</div>\n  <div>{{ 'Time' | translate:currentLanguage }}: {{ date | dateFormat:currentLanguage:true }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/language-switcher/language-switcher.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/language-switcher/language-switcher.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".australian-rtl {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n"

/***/ }),

/***/ "./src/app/components/language-switcher/language-switcher.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/language-switcher/language-switcher.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LanguageSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitcherComponent", function() { return LanguageSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_localization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/localization.service */ "./src/app/services/localization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let LanguageSwitcherComponent = class LanguageSwitcherComponent {
    constructor(localizationService) {
        this.localizationService = localizationService;
        this.languageList = localizationService.getLanguageList();
        this.date = Date.now();
        setInterval(() => {
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
};
LanguageSwitcherComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'language-switcher',
        template: __webpack_require__(/*! ./language-switcher.component.html */ "./src/app/components/language-switcher/language-switcher.component.html"),
        styles: [__webpack_require__(/*! ./language-switcher.component.scss */ "./src/app/components/language-switcher/language-switcher.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_localization_service__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]])
], LanguageSwitcherComponent);



/***/ }),

/***/ "./src/app/components/my-component/my-component.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">@Input</b> @Input() название_входящей_переменной </div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ inputHTMLparent }} </div>\n    <div class=\"ts\"><b class=\"caption\">TS child</b> {{ inputTS }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> {{ inputHTMLchild }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b> <span> Входящая переменная message = {{ message }}</span> </div>\n    <div class=\"note\"><b class=\"caption\">Примечание</b> Если передаваемые данные еще не созданы использовать ngOnInit </div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">*ngIf</b> *ngIf=\"выражение\" </div>\n    <div class=\"html\"><b class=\"caption\">HTML</b> {{ ngIfHTMLcontroll }} <br></div>\n    <div class=\"html\"><b class=\"caption\"></b> {{ ngIfHTML }} <br></div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">*ngFor</b> *ngFor=\"let item of 'данные'\" </div>\n    <div class=\"html\"><b class=\"caption\">HTML</b> {{ ngForHTML }} <br></div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      <ul>\n        <li *ngFor=\"let item of ['one','two','three']\">\n          {{item}}\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">@Output</b> @Output() название_события = new EventEmitter() </div>\n    <div class=\"ts\"><b class=\"caption\">TS parent</b> {{ outputTSparent }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ outputHTMLparent }} </div>\n    <div class=\"ts\"><b class=\"caption\">TS child</b> {{ outputTSchild }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> {{ outputHTMLchild }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      Пойдет наверх после изменения в title: <input type=\"text\" (input)=\"goOut($event.target.value)\">\n    </div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">Double Bind</b> [(ngModel)] = название_поля </div>\n    <div class=\"ts\"><b class=\"caption\">TS</b> {{ localTS }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML</b> {{ localHTML }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      Локальная двусторонняя привязка: <input type=\"text\" [(ngModel)]=\"localTitle\"> {{ localTitle }}\n    </div>\n    <div class=\"ts\"><b class=\"caption\">TS child</b> {{ ioTS }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> Двусторонняя привязка наверху title: </div>\n    <div class=\"html\"> <b class=\"caption\"></b> {{ ioHTMLchild }} </div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ ioHTMLparent }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      Двусторонняя привязка наверху title:\n      <input type=\"text\" (input)=\"goOutInput($event.target.value)\" [(ngModel)]=\"titleMy\" value=\"{{ titleMy }}\"> {{ titleMy }}\n    </div>\n    <div class=\"note\"><b class=\"caption\">Примечание</b> titleMy<span style=\"color: deepskyblue;\">Change</span> - добавленный <span style=\"color: deepskyblue;\">Change</span> для переменной это зарезервированное значение!</div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">ng-content</b> @Input() название_входящей_переменной </div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ ngContentHTMLparent }} </div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> {{ ngContentHTMLchild }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b> <ng-content></ng-content> </div>\n    <div class=\"note\"><b class=\"caption\">Примечание</b> Выбор отдельных элементов если их несколько {{ ngContentHTMLchildCustom }} </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-component/my-component.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #2B2B2B;\n  color: #BBBBBB; }\n\n.link-source {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  float: right;\n  margin: 2px 5px; }\n\n.link-source a {\n    color: #BBBBBB; }\n\n.readme {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  padding: 5px;\n  color: #E7BE5F; }\n\n.readme a {\n    color: #BBBBBB; }\n\n.readme span {\n    color: #BBBBBB; }\n\n.parst {\n  display: flex;\n  flex-wrap: wrap; }\n\n.part {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  display: inline-block;\n  border-bottom: 1px solid forestgreen;\n  margin: 5px; }\n\n.part label, .part a {\n    cursor: pointer;\n    text-decoration: none;\n    color: #BBBBBB; }\n\n.part label:hover, .part a:hover {\n      text-decoration: underline; }\n\n.part label input, .part a input {\n      cursor: pointer; }\n\n.green-text {\n  color: forestgreen; }\n\n.yellow-text {\n  color: yellow; }\n\n.blue-text {\n  color: deepskyblue; }\n\n.block {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 14px;\n  color: #4677a6;\n  border: 1px solid #5F9F4D;\n  margin: 5px 0;\n  padding: 3px;\n  white-space: pre-wrap; }\n\n.block .html {\n    color: #E7BE5F; }\n\n.block .style {\n    color: #6897BB; }\n\n.block .ts {\n    color: #9876AA; }\n\n.block .result {\n    color: white; }\n\n.block .result .link {\n      color: #BBBBBB;\n      margin: 0 5px; }\n\n.block .result .link-active {\n      color: deepskyblue; }\n\n.block .note {\n    color: #81BF23; }\n\n.block .caption {\n    display: inline-block;\n    width: 120px;\n    margin-top: 3px;\n    color: #BBBBBB; }\n\n.block .caption_first {\n      text-decoration: underline;\n      margin: 0 0 3px; }\n"

/***/ }),

/***/ "./src/app/components/my-component/my-component.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponentComponent", function() { return MyComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MyComponentComponent = class MyComponentComponent {
    constructor() {
        this.newTitleMy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.titleMyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputTS = `@Input() message: string;`;
        this.inputHTMLparent = `<my-component [message]="\'Hello world!\'"></my-component>`;
        this.inputHTMLchild = '<span>Входящая переменная message = {{ message }}</span>';
        this.ngIfHTMLcontroll = `<label>Part two <input type="checkbox" #Part2 checked></label>`;
        this.ngIfHTML = `<div *ngIf="Part2.checked">...</div>`;
        this.ngForHTML = `<ul> <li *ngFor="let item of ['one','two','three']"> {{item}} </li> </ul>`;
        this.outputTSparent = `
  title = 'app';
  
  newTitleApp(str) {
    this.title = str;
  }`;
        this.outputHTMLparent = `<my-component (newTitleMy)="newTitleApp($event)"></my-component>`;
        this.outputTSchild = `
  @Output() newTitleMy = new EventEmitter();
  
  goOut(str) {
    this.newTitleMy.emit(str);
  }`;
        this.outputHTMLchild = `Пойдет наверх после изменения в title: <input type="text" (input)="goOut($event.target.value)">`;
        this.localTitle = 'I here';
        this.localTS = `localTitle = 'I here';`;
        this.localHTML = `Локальная двусторонняя привязка: <input type="text" [(ngModel)]="localTitle"> {{ localTitle }}`;
        this.ioHTMLparent = `<my-component [(titleMy)]="title"></my-component>`;
        this.ioHTMLchild = `<input type="text" (input)="goOutInput($event.target.value)" [(ngModel)]="titleMy" value="{{ titleMy }}"> {{ titleMy }}`;
        this.ioTS = `
  @Input() titleMy: string;
  @Output() titleMyChange = new EventEmitter();
  
  goOutInput(str) {
    this.titleMyChange.emit(str);
  }`;
        this.ngContentHTMLparent = `<my-component> <H3>Loading...</H3> </my-component>`;
        this.ngContentHTMLchild = `<ng-content></ng-content>`;
        this.ngContentHTMLchildCustom = `<ng-content select="h3"></ng-content>`;
    }
    goOut(str) {
        this.newTitleMy.emit(str);
    }
    goOutInput(str) {
        this.titleMyChange.emit(str);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], MyComponentComponent.prototype, "message", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], MyComponentComponent.prototype, "newTitleMy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], MyComponentComponent.prototype, "titleMy", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], MyComponentComponent.prototype, "titleMyChange", void 0);
MyComponentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'my-component',
        template: __webpack_require__(/*! ./my-component.component.html */ "./src/app/components/my-component/my-component.component.html"),
        styles: [__webpack_require__(/*! ./my-component.component.scss */ "./src/app/components/my-component/my-component.component.scss")]
    })
], MyComponentComponent);



/***/ }),

/***/ "./src/app/components/user-filter/user-filter.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-filter/user-filter.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Filter: {{ filter | json }}</span><br>\n<label>Search: <input type=\"search\" [(ngModel)]=\"filter.name\" value=\"\"></label>\n<br>\nID: <label>from <input style=\"width: 45px;\" type=\"number\" [(ngModel)]=\"filter.idmin\"></label>\n<label> to <input style=\"width: 45px;\" type=\"number\" [(ngModel)]=\"filter.idmax\"></label>\n"

/***/ }),

/***/ "./src/app/components/user-filter/user-filter.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-filter/user-filter.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-filter/user-filter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-filter/user-filter.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFilterComponent", function() { return UserFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let UserFilterComponent = class UserFilterComponent {
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], UserFilterComponent.prototype, "filter", void 0);
UserFilterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'user-filter',
        template: __webpack_require__(/*! ./user-filter.component.html */ "./src/app/components/user-filter/user-filter.component.html"),
        styles: [__webpack_require__(/*! ./user-filter.component.scss */ "./src/app/components/user-filter/user-filter.component.scss")]
    })
], UserFilterComponent);



/***/ }),

/***/ "./src/app/directives/my-directive.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/my-directive.directive.ts ***!
  \******************************************************/
/*! exports provided: MyDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDirectiveDirective", function() { return MyDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MyDirectiveDirective = class MyDirectiveDirective {
    constructor() {
        this.myColor = 'pink';
    }
    changeColor(event) {
        this.myColor = this.myColor === 'pink' ? '#289FDB' : 'pink';
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.color'),
    __metadata("design:type", String)
], MyDirectiveDirective.prototype, "myColor", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyDirectiveDirective.prototype, "changeColor", null);
MyDirectiveDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appMyDirective]',
        exportAs: 'myExport'
    }),
    __metadata("design:paramtypes", [])
], MyDirectiveDirective);



/***/ }),

/***/ "./src/app/directives/my-struct-directive.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/my-struct-directive.directive.ts ***!
  \*************************************************************/
/*! exports provided: MyStructDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStructDirectiveDirective", function() { return MyStructDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MyStructDirectiveDirective = class MyStructDirectiveDirective {
    constructor(template, view) {
        this.template = template;
        this.view = view;
        this.delay();
    }
    delay() {
        setTimeout(() => this.view.createEmbeddedView(this.template), 2000);
    }
};
MyStructDirectiveDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appMyStructDirective]'
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
], MyStructDirectiveDirective);



/***/ }),

/***/ "./src/app/modules/router/router.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/router/router.module.ts ***!
  \*************************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/language-switcher/language-switcher.component */ "./src/app/components/language-switcher/language-switcher.component.ts");
/* harmony import */ var _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/my-component/my-component.component */ "./src/app/components/my-component/my-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    {
        path: '', component: _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_3__["MyComponentComponent"]
    },
    {
        path: 'my-component', component: _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_3__["MyComponentComponent"]
    },
    {
        path: 'language-switcher', component: _components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_2__["LanguageSwitcherComponent"]
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    }
];
let AppRouterModule = class AppRouterModule {
};
AppRouterModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ],
        declarations: []
    })
], AppRouterModule);



/***/ }),

/***/ "./src/app/pipes/date-format.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/date-format.pipe.ts ***!
  \*******************************************/
/*! exports provided: DateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DateFormatPipe = class DateFormatPipe {
    transform(date, code, kind) {
        this.dateFormatter = kind ? new Intl.DateTimeFormat(code, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }) : new Intl.DateTimeFormat(code);
        return this.dateFormatter.format(date);
    }
};
DateFormatPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'dateFormat'
    })
], DateFormatPipe);



/***/ }),

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_localization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/localization.service */ "./src/app/services/localization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TranslatePipe = class TranslatePipe {
    constructor(localizationService) {
        this.localizationService = localizationService;
    }
    transform(word, args) {
        return this.localizationService.getWord(word);
    }
};
TranslatePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'translate'
    }),
    __metadata("design:paramtypes", [_services_localization_service__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]])
], TranslatePipe);



/***/ }),

/***/ "./src/app/pipes/user-filter.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/user-filter.pipe.ts ***!
  \*******************************************/
/*! exports provided: UserFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFilterPipe", function() { return UserFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const filters = [
    (user, filter) => user.name.toUpperCase().includes(filter.name.toUpperCase()),
    (user, filter) => user.id <= filter.idmax && user.id >= filter.idmin
];
let UserFilterPipe = class UserFilterPipe {
    transform(value, filter) {
        return value.filter(user => {
            return filters.every(filterFunction => filterFunction(user, filter));
        });
    }
};
UserFilterPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'userFilter',
        pure: false
    })
], UserFilterPipe);



/***/ }),

/***/ "./src/app/services/localization.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/localization.service.ts ***!
  \**************************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let LocalizationService = class LocalizationService {
    constructor() {
        this.currentLanguage = 'ru-RU';
        this.languages = new Map([
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
                }],
            ['en-AU', {
                    title: 'Australia',
                    code: 'en-AU',
                    isRtl: true
                }]
        ]);
        this.words = new Map([
            ['ru-RU', {
                    'Date': 'Дата',
                    'Time': 'Время'
                }]
        ]);
    }
    getWord(word) {
        if (this.words.has(this.currentLanguage)) {
            if (this.words.get(this.currentLanguage)[word]) {
                return this.words.get(this.currentLanguage)[word];
            }
            else {
                return word;
            }
        }
        else {
            return word;
        }
    }
    getLanguageList() {
        return [...this.languages.values()];
    }
    setCurrentLocalization(code) {
        if (this.languages.has(code)) {
            this.currentLanguage = code;
        }
    }
    getCurrentLocalization() {
        return this.languages.get(this.currentLanguage);
    }
};
LocalizationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], LocalizationService);



/***/ }),

/***/ "./src/app/services/my-data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/my-data.service.ts ***!
  \*********************************************/
/*! exports provided: MyDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDataService", function() { return MyDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MyDataService = class MyDataService {
    constructor(_http) {
        this._http = _http;
        this.dataFromHttp = [];
        this.dataFromHttpObj = [];
        this.data = [
            { word: 'Hello' },
            { word: 'World!' }
        ];
        this._http.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(users => { for (const key in users)
            this.dataFromHttp.push(users[key].username); });
        this._http.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(users => { for (const key in users)
            this.dataFromHttpObj.push(users[key]); });
    }
    getDataHttp() {
        return this.dataFromHttp;
    }
    getDataHttpObj() {
        return this.dataFromHttpObj;
    }
    getDafalutFilter() {
        return {
            name: '',
            idmin: 1,
            idmax: 10
        };
    }
    getData() {
        return this.data;
    }
    addData(word) {
        this.data.push({ word });
    }
};
MyDataService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MyDataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular-Notes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
