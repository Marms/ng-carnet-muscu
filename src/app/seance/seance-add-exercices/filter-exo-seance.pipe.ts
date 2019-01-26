import {Pipe, PipeTransform} from '@angular/core';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {FormArray, FormGroup} from '@angular/forms';
import index from '@angular/cli/lib/cli';
import {Seance} from '../seance.model';

@Pipe({
  name: 'filterExoTemplate',
  pure: false
})
/**
 * Filtre une liste d'exoTemplate avec ceux contenus dans une seance (template et exercices)
 */
export class FilterExoSeancePipe implements PipeTransform {

  transform(value: ExoTemplate[], seance: Seance) {
    if (seance.template.exoTemplateList == null) {
      return value;
    }
    const arrayObject = this.filterArray(value, seance.template.exoTemplateList);
    const exo = seance.exercises.map(e => e.template);
    return this.filterArray(arrayObject, exo);
  }

  private filterArray(value: ExoTemplate[], tplExoList: ExoTemplate[]) {
    const arrayObject = [];
    for (const indexValue in Object.keys(value)) {
      let trouve: boolean = false;
      for (const indexTpl in Object.keys(tplExoList)) {
        const name = tplExoList[Number(indexTpl)].name;
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
