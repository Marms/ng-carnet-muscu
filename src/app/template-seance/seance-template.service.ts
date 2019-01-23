import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ScTemplate} from './scTemplate.model';
import {ExoTemplate} from '../template-exo/ExoTemplate.model';

export class SeanceTemplateService {
  inqredientsChanged = new Subject<Ingredient[]>();
  scTemplatesChanged = new Subject<ScTemplate[]>();
  startedEditing = new Subject<number>();


  private seanceTemplates: ScTemplate[] = [
    new ScTemplate('Full body', 'Pas le temps de niaser', ''),
    new ScTemplate('Jambes Hardcore', 'harcore!!!!', '')
  ];


  getSeanceTemplates() {
    return this.seanceTemplates;
  }

  getSeanceTemplate(index: number) {
    return this.seanceTemplates[index];
  }

  pushSeanceTemplate(sc: ScTemplate) {
    this.seanceTemplates.push(sc);
    this.scTemplatesChanged.next(this.seanceTemplates);

  }

  updateSeanceTemplate(index: number, updatedScTpl: ScTemplate) {
    this.seanceTemplates[index] = updatedScTpl;
    this.scTemplatesChanged.next(this.seanceTemplates);
  }

  pushAllSeanceTemplates(scs: ScTemplate[]) {
    this.seanceTemplates.push(...scs);
    this.scTemplatesChanged.next(this.seanceTemplates);
  }

  deleteSeanceTemplate(index: number) {
    this.seanceTemplates.splice(index, 1);
    this.scTemplatesChanged.next(this.seanceTemplates);
  }
}
