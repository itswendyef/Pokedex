import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokedexNumberFormat'
})
export class PokedexNumberFormatPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    var s = value+"";
    while (s.length < 3) s = "0" + s;
    return '#'+s;
  }

}
