import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  pure: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const date = new Date(value);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
    const parts = formattedDate.split('.');
    const newDate = parts[1] + '.' + parts[0] + '.' + parts[2];
    return newDate;
  }

}
