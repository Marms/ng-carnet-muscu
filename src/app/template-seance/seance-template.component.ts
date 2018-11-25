import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { isNgContainer } from '@angular/compiler';
import { SeanceTemplateService } from './seance-template.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './seance-template.component.html',
  styleUrls: ['./seance-template.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients:Ingredient[] = this.shopSvc.getIngredients();
  ingredient: Ingredient = new Ingredient('',0);
  ingredientSubscription : Subscription;
  constructor(private shopSvc : SeanceTemplateService) { }

  ngOnInit() {
    this.ingredients = this.shopSvc.getIngredients();
    this.ingredientSubscription = this.shopSvc.ingredientsChanged.subscribe(
      (ing: Ingredient[]) => {
        this.ingredients = ing;
      }
    );
  }

  onEditItem(index : number) {
    this.shopSvc.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }

  onClickIngredientItem(ingredient) {
    this.ingredient = ingredient;
  }
}
