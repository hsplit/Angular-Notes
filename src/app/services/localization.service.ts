import { Injectable } from '@angular/core';
import { LanguageDescription } from '../interfaces/localization-interfaces';

@Injectable({
  providedIn: 'root'
})
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
    }],
    ['en-AU', {
      title: 'Australia',
      code: 'en-AU',
      isRtl: true
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
}
