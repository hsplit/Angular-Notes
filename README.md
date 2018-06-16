# Angular Notes [Open in browser](https://hsplit.github.io/Angular-Notes/)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

Part1: Интерполяция {{}}, data bind []="", event ()="", link #.

Part2: Component, @Input, *ngIf, *ngFor, @Output, Double Bind [(ngModel)], ng-content.

Part3: Directive, exportAs, структурная директива.

Part4: Service, HttpClientModule.

Part5: Pipe.

Part6: Localization.

Part7: Routes.
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
Or edit file **angular.json**
```json
{
  "projects": {
    "name-project": {
      "schematics": {
        "@schematics/angular:component": {
          "styleext": "scss"
        }
      }
    }
  }
}
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
___
#### Create service
```bash
ng g s my-data
```
Check *import* and *providers* in **app.module.ts**
___
#### Create pipe
```bash
ng g p user-filter
```
Check *import* and *declarations* in **app.module.ts**
___
#### Create interface
```bash
ng g i localizations-interfaces
```
___
#### Create module
```bash
ng g m router
```
