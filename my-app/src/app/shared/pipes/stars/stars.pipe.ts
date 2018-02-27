import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../../enums/state.enum';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === State.ALIVRER) {
      return `AL-${value}`;
    } else if (args === State.ENCOURS) {
      return `EN-${value}`;
    } else if (args === State.LIVREE) {
      return `LI-${value}`;
    }
    return null;
  }

}
