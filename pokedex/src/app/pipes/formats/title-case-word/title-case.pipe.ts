import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
