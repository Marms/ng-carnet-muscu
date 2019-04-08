import {Pipe, PipeTransform} from '@angular/core';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {Type} from './type.model';

@Pipe({
  name: 'filterByType',
  pure: false
})
export class FilterByTypePipe implements PipeTransform {

  transform(value: ExoTemplate[], types: Type[]): ExoTemplate[] {
    const arrayObject = [];
    for (const indexValue in Object.keys(value)) {
      let trouve = false;
      for (const indexTpl in Object.keys(types)) {

        const name = types[indexTpl].name;
        const checked = types[indexTpl].checked;

        if (value[indexValue].type === undefined) {
          trouve = true;
        } else if (value[indexValue].type.includes(name) && checked) {
          trouve = true;
        }
      }
      if (trouve) {
        arrayObject.push(value[indexValue]);
      }
    }
    return arrayObject;
  }

}
