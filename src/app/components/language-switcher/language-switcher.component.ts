import { Component } from '@angular/core';
import { LanguageDescription } from '../../interfaces/localization-interfaces';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
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
}
