import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {Serie} from './serie.model';

export class Exercise {
  public template: ExoTemplate;
  public series: Serie[];
  public id: number;
  public date: Date;


  constructor(template: ExoTemplate) {
    this.template = template;
    this.series = [];
    this.id = Date.now();
    this.date = new Date();
  }
}
