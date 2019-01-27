import {ExoTemplate} from './ExoTemplate.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

/** Manage exoTemplate */
@Injectable()
export class ExoTemplateService {

  exoTemplateChanged: Subject<ExoTemplate[]> = new Subject();
  private exoTemplates: ExoTemplate[] = [];

  constructor() {
  }

  getExoTemplates() {
    return this.exoTemplates.slice(); // retourne une copie du tableau
  }

  setExoTemplate(templates: ExoTemplate[]) {
    this.exoTemplates = templates;
    this.exoTemplateChanged.next(this.exoTemplates);
  }

  getExoTemplate(id: number): ExoTemplate {
    return this.exoTemplates[id];
  }

  deleteExoTemplate(id: number) {
    this.exoTemplates.splice(id, 1);
    this.exoTemplateChanged.next(this.exoTemplates);
  }

  addExoTemplate(exoTemplate: ExoTemplate) {
    this.exoTemplates.push(exoTemplate);
    this.exoTemplateChanged.next(this.exoTemplates);
  }

  updateExoTemplate(index: number, exo: ExoTemplate) {
    this.exoTemplates[index] = exo;
    this.exoTemplateChanged.next(this.exoTemplates);
  }

}
