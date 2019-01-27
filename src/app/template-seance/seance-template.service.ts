import {Subject} from 'rxjs/Subject';
import {ScTemplate} from './scTemplate.model';

export class SeanceTemplateService {
  scTemplatesChanged = new Subject<ScTemplate[]>();
  startedEditing = new Subject<number>();

  private seanceTemplates: ScTemplate[] = [];

  getSeanceTemplates() {
    return this.seanceTemplates;
  }

  setSeanceTemplates(templates: ScTemplate[]) {
    this.seanceTemplates = templates;
    this.scTemplatesChanged.next(this.seanceTemplates);
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
