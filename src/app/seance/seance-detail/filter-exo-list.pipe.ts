import {Pipe, PipeTransform} from '@angular/core';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {FormArray, FormGroup} from '@angular/forms';
import index from '@angular/cli/lib/cli';
import {Seance} from '../seance.model';
import {Exercise} from '../exercise/exercise.model';

@Pipe({
  name: 'filterExoList',
  pure: false
})
/**
 * Filtre une liste d'exoTemplate avec ceux contenus dans une seance (template et exercices)
 */
export class FilterExoListPipe implements PipeTransform {

  transform(value: ExoTemplate[], list: Exercise[]) {
    if (value == null) {
      return [];
    }
    return this.filterArray(value, list);
  }

  private filterArray(value: ExoTemplate[], tplExoList: Exercise[]) {
    const arrayObject = [];
    for (const indexValue in Object.keys(value)) {
      let trouve: boolean = false;
      for (const indexTpl in Object.keys(tplExoList)) {
        const name = tplExoList[Number(indexTpl)].template.name;
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
