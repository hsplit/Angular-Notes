import { TranslatePipe } from './translate.pipe';
import { LocalizationService } from '../services/localization.service';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const service = new LocalizationService();
    service.currentLanguage = 'ru-RU';
    const pipe = new TranslatePipe(service);
    expect(pipe).toBeTruthy();
  });
});
