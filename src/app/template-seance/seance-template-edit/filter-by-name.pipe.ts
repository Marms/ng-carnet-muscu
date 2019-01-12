import {Pipe, PipeTransform} from '@angular/core';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {FormArray, FormGroup} from '@angular/forms';
import index from '@angular/cli/lib/cli';

@Pipe({
  name: 'filterByName',
  pure: false
})
export class FilterByNamePipe implements PipeTransform {

  transform(value: ExoTemplate[], tplExoList: FormArray): ExoTemplate[] {
    const arrayObject = [];
    for (const indexValue in Object.keys(value)) {
      let trouve: boolean = false;
      for (const indexTpl in Object.keys(tplExoList.controls)) {
        const name = tplExoList.at(Number(indexTpl)).get('name').value;
        if (value[indexValue].name === name) {
          trouve = true;
        }
      }
      if (!trouve) {
        arrayObject.push(value[indexValue]);
      }
    }
    return arrayObject;
  }

}
