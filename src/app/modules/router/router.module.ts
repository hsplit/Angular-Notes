import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSwitcherComponent } from '../../components/language-switcher/language-switcher.component';
import { MyComponentComponent } from '../../components/my-component/my-component.component';

const routes: Routes = [
  {
    path: 'my-component', component: MyComponentComponent
  },
  {
    path: 'language-switcher', component: LanguageSwitcherComponent
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
