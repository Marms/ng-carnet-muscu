import { ExoTemplate } from './ExoTemplate.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { SeanceTemplateService } from '../template-seance/seance-template.service';
import { Subject } from 'rxjs/Subject';

/** Manage exoTemplate */
@Injectable()
export class ExoTemplateService {

    exoTemplateChanged: Subject<ExoTemplate[]> = new Subject();

    private exoTemplates: ExoTemplate[] = [];

    constructor(private shopSvc: SeanceTemplateService) {}

    getExoTemplates() {
        return this.exoTemplates.slice(); // retourne une copie du tableau
    }
    setExoTemplate( templates: ExoTemplate[]) {
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

    addExoTemplate(recipe: ExoTemplate) {
        this.exoTemplates.push(recipe);
        this.exoTemplateChanged.next(this.exoTemplates);
    }
    updateExoTemplate(index: number, exo: ExoTemplate) {
        this.exoTemplates[index] = exo;
        this.exoTemplateChanged.next(this.exoTemplates);
    }

}
