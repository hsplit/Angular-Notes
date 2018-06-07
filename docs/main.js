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

module.exports = "<div style=\"background: #2B2B2B; position: fixed; top: 0; width: 100vw; height: 5px;\"></div>\n<div style=\"border: 1px solid #f00; position: sticky; top: 5px; background: #2B2B2B;\">\n  <h1 style=\"margin: 0;\"><b>Welcome to {{ title }}!</b></h1>\n  <img width=\"50\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  <div class=\"part\">\n    <label>Part one <input type=\"checkbox\" #Part1 checked></label>\n  </div>\n  <div class=\"part\">\n    <label>Part two <input type=\"checkbox\" #Part2 checked></label>\n  </div>\n</div>\n<div>\n  <div *ngIf=\"Part1.checked\">\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Интерполяция</b> <span>{{</span> выражение <span>}}</span></div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ interpTS }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ interpHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b> x + 10 = {{ x + 10 }}</div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Data bind</b> [атрибут] = \"выражение\" </div>\n      <div class=\"style\"><b class=\"caption\">Style</b> {{ bindStyle }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ bindTS }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ bindHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b> <span [class]=\"myClass\">Hello</span> </div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">JoyCasino\n        <span [style.opacity]=\"myClassCasino.length%10/10\">♥</span></b>  Data bind + setInterval\n      </div>\n      <div class=\"style\"><b class=\"caption\">Style</b> {{ casinoStyle }}</div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ casinoTS }} </div>\n      <div class=\"html\">\n        <b class=\"caption\">HTML</b> {{ casinoHTML }} <br>\n        <b class=\"caption\"></b> {{ casinoAdditional }}\n      </div>\n      <div class=\"result\"><b class=\"caption\">Result</b><span [class]=\"myClassCasino\">JoyCasino</span></div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Event</b> (событие) = \"выражение\" </div>\n      <div class=\"ts\"><b class=\"caption\">TS</b> {{ eventTS }}</div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ eventHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b> <span (click)=\"myClick($event)\"> Click me!</span> </div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ eventInputHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        Color: <input type=\"text\" (input)=\"$event.target.style.backgroundColor = $event.target.value\" value=\"#E03136\">\n      </div>\n    </div>\n    <div class=\"block\">\n      <div><b class=\"caption caption_first\">Ссылки</b> #название </div>\n      <div class=\"html\"><b class=\"caption\">HTML</b> {{ linkHTML }}</div>\n      <div class=\"result\"><b class=\"caption\">Result</b>\n        <span #mySpan> Color: </span>\n        <input type=\"text\" (input)=\"mySpan.style.color = $event.target.value\" value=\"#E03136\">\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"Part2.checked\">\n    <my-component [message]=\"'Hello world!'\" (newTitleMy)=\"newTitleApp($event)\" [(titleMy)]=\"title\">\n      <H3>Loading...</H3>\n    </my-component>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #2B2B2B;\n  color: #BBBBBB; }\n\n.part {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  display: inline-block; }\n\n.part label {\n    cursor: pointer; }\n\n.green-text {\n  color: forestgreen; }\n\n.yellow-text {\n  color: yellow; }\n\n.blue-text {\n  color: deepskyblue; }\n\n.block {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 14px;\n  color: #4677a6;\n  border: 1px solid #5F9F4D;\n  margin: 5px 0;\n  padding: 3px;\n  white-space: pre-wrap; }\n\n.block .html {\n    color: #E7BE5F; }\n\n.block .style {\n    color: #6897BB; }\n\n.block .ts {\n    color: #9876AA; }\n\n.block .result {\n    color: white; }\n\n.block .note {\n    color: #81BF23; }\n\n.block .caption {\n    display: inline-block;\n    width: 120px;\n    margin-top: 3px;\n    color: #BBBBBB; }\n\n.block .caption_first {\n      text-decoration: underline;\n      margin: 0 0 3px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app';
        this.interpTS = 'class AppComponent { x = 5; }';
        this.interpHTML = '<span>x + 10 = {{ x + 10 }}</span>';
        this.x = 5;
        this.bindTS = "class AppComponent { myClass = 'green-text'; }";
        this.bindHTML = '<span [class]="myClass">Hello</span>';
        this.bindStyle = ".green-text { color: forestgreen; }";
        this.myClass = 'green-text';
        // noinspection TsLint
        this.casinoTS = "\n  class AppComponent {\n    myClassCasino = 'blue-text'; \n    \n    constructor() {\n      setInterval(() => {\n        this.myClassCasino = this.myClassCasino === 'blue-text' ? 'yellow-text' : 'blue-text';\n      }, 500);\n    }\n  }";
        this.casinoHTML = '<span [class]="myClassCasino">JoyCasino</span>';
        this.casinoAdditional = '<span [style.opacity]="myClassCasino.length%10/10">♥</span>';
        this.casinoStyle = ".yellow-text { color: yellow; } .blue-text { color: deepskyblue; }";
        this.myClassCasino = 'blue-text';
        this.eventTS = "\n  class AppComponent {\n    myClick(e) {\n      alert('timeStamp = ' + e.timeStamp);\n    }\n  }";
        this.eventHTML = '<span (click)="myClick($event)">Click me!</span>';
        this.eventInputHTML = "Color: <input type=\"text\" (input)=\"$event.target.style.backgroundColor = $event.target.value\">";
        this.linkHTML = "<span #mySpan>Color: </span><input type=\"text\" (input)=\"mySpan.style.color = $event.target.value\">";
        setInterval(function () {
            _this.myClassCasino = _this.myClassCasino === 'blue-text' ? 'yellow-text' : 'blue-text';
        }, 500);
    }
    AppComponent.prototype.newTitleApp = function (str) {
        this.title = str;
    };
    AppComponent.prototype.myClick = function (e) {
        alert('timeStamp = ' + e.timeStamp);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-component/my-component.component */ "./src/app/components/my-component/my-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_4__["MyComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/my-component/my-component.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <hr style=\"background: #f00; height: 2px; border: none;\">\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">@Input</b> @Input() название_входящей_переменной </div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ inputHTMLparent }} </div>\n    <div class=\"ts\"><b class=\"caption\">TS child</b> {{ inputTS }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> {{ inputHTMLchild }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b> <span> Входящая переменная message = {{ message }}</span> </div>\n    <div class=\"note\"><b class=\"caption\">Примечание</b> Если передаваемые данные еще не созданы использовать ngOnInit </div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">*ngIf</b> *ngIf=\"выражение\" </div>\n    <div class=\"html\"><b class=\"caption\">HTML</b> {{ ngIfHTMLcontroll }} <br></div>\n    <div class=\"html\"><b class=\"caption\"></b> {{ ngIfHTML }} <br></div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">*ngFor</b> *ngFor=\"let item of 'данные'\" </div>\n    <div class=\"html\"><b class=\"caption\">HTML</b> {{ ngForHTML }} <br></div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      <ul>\n        <li *ngFor=\"let item of ['one','two','three']\">\n          {{item}}\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">@Output</b> @Output() название_события = new EventEmitter() </div>\n    <div class=\"ts\"><b class=\"caption\">TS parent</b> {{ outputTSparent }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ outputHTMLparent }} </div>\n    <div class=\"ts\"><b class=\"caption\">TS child</b> {{ outputTSchild }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> {{ outputHTMLchild }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      Пойдет наверх после изменения в title: <input type=\"text\" (input)=\"goOut($event.target.value)\">\n    </div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">Double Bind</b> [(ngModel)] = название_поля </div>\n    <div class=\"ts\"><b class=\"caption\">TS</b> {{ localTS }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML</b> {{ localHTML }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      Локальная двусторонняя привязка: <input type=\"text\" [(ngModel)]=\"localTitle\"> {{ localTitle }}\n    </div>\n    <div class=\"ts\"><b class=\"caption\">TS child</b> {{ ioTS }}</div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> Двусторонняя привязка наверху title: </div>\n    <div class=\"html\"> <b class=\"caption\"></b> {{ ioHTMLchild }} </div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ ioHTMLparent }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b>\n      Двусторонняя привязка наверху title:\n      <input type=\"text\" (input)=\"goOutInput($event.target.value)\" [(ngModel)]=\"titleMy\" value=\"{{ titleMy }}\"> {{ titleMy }}\n    </div>\n    <div class=\"note\"><b class=\"caption\">Примечание</b> Опасно для психики! Берегите нервы.</div>\n    <div class=\"note\"><b class=\"caption\"></b> titleMy<span style=\"color: deepskyblue;\">Change</span> - добавленный <span style=\"color: deepskyblue;\">Change</span> для переменной это зарезервированное значение!</div>\n  </div>\n  <div class=\"block\">\n    <div><b class=\"caption caption_first\">ng-content</b> @Input() название_входящей_переменной </div>\n    <div class=\"html\"> <b class=\"caption\">HTML parent</b> {{ ngContentHTMLparent }} </div>\n    <div class=\"html\"> <b class=\"caption\">HTML child</b> {{ ngContentHTMLchild }} </div>\n    <div class=\"result\"><b class=\"caption\">Result</b> <ng-content></ng-content> </div>\n    <div class=\"note\"><b class=\"caption\">Примечание</b> Выбор отдельных элементов если их несколько {{ ngContentHTMLchildCustom }} </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-component/my-component.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #2B2B2B;\n  color: #BBBBBB; }\n\n.part {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  display: inline-block; }\n\n.part label {\n    cursor: pointer; }\n\n.green-text {\n  color: forestgreen; }\n\n.yellow-text {\n  color: yellow; }\n\n.blue-text {\n  color: deepskyblue; }\n\n.block {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 14px;\n  color: #4677a6;\n  border: 1px solid #5F9F4D;\n  margin: 5px 0;\n  padding: 3px;\n  white-space: pre-wrap; }\n\n.block .html {\n    color: #E7BE5F; }\n\n.block .style {\n    color: #6897BB; }\n\n.block .ts {\n    color: #9876AA; }\n\n.block .result {\n    color: white; }\n\n.block .note {\n    color: #81BF23; }\n\n.block .caption {\n    display: inline-block;\n    width: 120px;\n    margin-top: 3px;\n    color: #BBBBBB; }\n\n.block .caption_first {\n      text-decoration: underline;\n      margin: 0 0 3px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyComponentComponent = /** @class */ (function () {
    function MyComponentComponent() {
        this.newTitleMy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.titleMyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputTS = "@Input() message: string;";
        this.inputHTMLparent = "<my-component [message]=\"'Hello world!'\"></my-component>";
        this.inputHTMLchild = '<span>Входящая переменная message = {{ message }}</span>';
        this.ngIfHTMLcontroll = "<label>Part two <input type=\"checkbox\" #Part2 checked></label>";
        this.ngIfHTML = "<div *ngIf=\"Part2.checked\">...</div>";
        this.ngForHTML = "<ul> <li *ngFor=\"let item of ['one','two','three']\"> {{item}} </li> </ul>";
        this.outputTSparent = "\n  title = 'app';\n  \n  newTitleApp(str) {\n    this.title = str;\n  }";
        this.outputHTMLparent = "<my-component (newTitleMy)=\"newTitleApp($event)\"></my-component>";
        this.outputTSchild = "\n  @Output() newTitleMy = new EventEmitter();\n  \n  goOut(str) {\n    this.newTitleMy.emit(str);\n  }";
        this.outputHTMLchild = "\u041F\u043E\u0439\u0434\u0435\u0442 \u043D\u0430\u0432\u0435\u0440\u0445 \u043F\u043E\u0441\u043B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 title: <input type=\"text\" (input)=\"goOut($event.target.value)\">";
        this.localTitle = 'I here';
        this.localTS = "localTitle = 'I here';";
        this.localHTML = "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u0432\u0443\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u044F\u044F \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430: <input type=\"text\" [(ngModel)]=\"localTitle\"> {{ localTitle }}";
        this.ioHTMLparent = "<my-component [(titleMy)]=\"title\"></my-component>";
        this.ioHTMLchild = "<input type=\"text\" (input)=\"goOutInput($event.target.value)\" [(ngModel)]=\"titleMy\" value=\"{{ titleMy }}\"> {{ titleMy }}";
        this.ioTS = "\n  @Input() titleMy: string;\n  @Output() titleMyChange = new EventEmitter();\n  \n  goOutInput(str) {\n    this.titleMyChange.emit(str);\n  }";
        this.ngContentHTMLparent = "<my-component> <H3>Loading...</H3> </my-component>";
        this.ngContentHTMLchild = "<ng-content></ng-content>";
        this.ngContentHTMLchildCustom = "<ng-content select=\"h3\"></ng-content>";
    }
    MyComponentComponent.prototype.goOut = function (str) {
        this.newTitleMy.emit(str);
    };
    MyComponentComponent.prototype.goOutInput = function (str) {
        this.titleMyChange.emit(str);
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
    return MyComponentComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\anewf\angular-notes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map