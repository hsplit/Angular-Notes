import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { MyStructDirectiveDirective } from './directives/my-struct-directive.directive';
import { MyDataService } from './services/my-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { UserFilterComponent } from './components/user-filter/user-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyDirectiveDirective,
    MyStructDirectiveDirective,
    UserFilterPipe,
    UserFilterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
