# Angular Notes [Open in browser](https://hsplit.github.io/Angular-Notes/)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

Part1: интерполяция {{}}, data bind []="", event ()="", link #.

Part2: Component, @Input, *ngIf, *ngFor, @Output, Double Bind [(ngModel)], ng-content.

Part3: Directive, exportAs, структурная директива.
___
#### Create project
[Using Sass with the Angular CLI](https://scotch.io/tutorials/using-sass-with-the-angular-cli)
```bash
ng new angular-notes --style=scss
```
Configure if created without --style
```bash
ng set defaults.styleExt scss
```
___
#### Create component
```bash
ng g c my-component
```
Check *import* and *declarations* in **app.module.ts**
___
#### Create directive
```bash
ng g d my-directive
```
Check *import* and *declarations* in **app.module.ts**
