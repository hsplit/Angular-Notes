import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from '../services/localization.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private localizationService: LocalizationService) { }

  transform(word: string, args?: any): string {
    return this.localizationService.getWord(word);
  }
}
