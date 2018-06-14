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
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { LocalizationService } from './services/localization.service';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyDirectiveDirective,
    MyStructDirectiveDirective,
    UserFilterPipe,
    UserFilterComponent,
    LanguageSwitcherComponent,
    DateFormatPipe,
    TranslatePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [
    MyDataService, LocalizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
