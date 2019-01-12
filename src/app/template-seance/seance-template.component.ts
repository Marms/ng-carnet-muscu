import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {SeanceTemplateService} from './seance-template.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-seance-template',
  templateUrl: './seance-template.component.html',
  styleUrls: ['./seance-template.component.css']
})
export class SeanceTemplateComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = this.shopSvc.getIngredients();
  ingredient: Ingredient = new Ingredient('', 0);
  ingredientSubscription: Subscription;

  constructor(private shopSvc: SeanceTemplateService) {
  }

  ngOnInit() {
    this.ingredients = this.shopSvc.getIngredients();
    this.ingredientSubscription = this.shopSvc.inqredientsChanged.subscribe(
      (ing: Ingredient[]) => {
        this.ingredients = ing;
      }
    );
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }

  onClickIngredientItem(ingredient) {
    this.ingredient = ingredient;
  }
}
