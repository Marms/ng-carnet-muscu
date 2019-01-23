import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {Serie} from './serie.model';

export class Exercise {
  template: ExoTemplate;
  series: Serie[];

  constructor(template: ExoTemplate) {
    this.template = template;
    this.series = [];
  }
}
