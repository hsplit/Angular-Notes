import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { MyStructDirectiveDirective } from './directives/my-struct-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyDirectiveDirective,
    MyStructDirectiveDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
