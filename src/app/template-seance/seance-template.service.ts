import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ScTemplate} from './scTemplate.model';
import {ExoTemplate} from '../template-exo/ExoTemplate.model';

export class SeanceTemplateService {
  inqredientsChanged = new Subject<Ingredient[]>();
  scTemplatesChanged = new Subject<ScTemplate[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [ // TODO delete
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)];


  private seanceTemplates: ScTemplate[] = [
    new ScTemplate('Full body', 'Pas le temps de niaser', ''),
    new ScTemplate('Jambes Hardcore', 'harcore!!!!', '')
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  pushIngredients(ing: Ingredient) {
    this.ingredients.push(ing);
    this.inqredientsChanged.next(this.ingredients);
  }

  pushAllIngredients(ings: Ingredient[]) {
    console.log('pushall');
    this.ingredients.push(...ings);
    this.inqredientsChanged.next(this.ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.inqredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.inqredientsChanged.next(this.ingredients.slice());
  }
}
