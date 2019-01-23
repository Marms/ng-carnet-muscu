import {ScTemplate} from '../template-seance/scTemplate.model';
import {Exercise} from './exercise/exercise.model';

export class Seance {

  template: ScTemplate;
  exercises: Exercise[];
  date: Date; // todo
  name: string;

  constructor(template: ScTemplate) {
    this.template = template;
    this.exercises = [];
    this.name = template.name;
    this.date = new Date();
  }
}
