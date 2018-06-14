import {Pipe, PipeTransform} from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  dateFormatter: DateTimeFormat;

  transform(date: Date, code: string, kind?: boolean) {
    this.dateFormatter = kind ? new Intl.DateTimeFormat(code, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) : new Intl.DateTimeFormat(code);
    return this.dateFormatter.format(date);
  }

}
