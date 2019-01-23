import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExoTemplateService } from '../exo-template.service';
import { ExoTemplate } from '../ExoTemplate.model';
import { FormGroup, FormControlName, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-exo-template-edit',
  templateUrl: './exo-template-edit.component.html',
  styleUrls: ['./exo-template-edit.component.css']
})
export class ExoTemplateEditComponent implements OnInit {

  id: number;
  editMode: boolean;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private recipeSvc: ExoTemplateService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  initForm() {
    const exoTemplate: ExoTemplate = this.getRecipe();

    this.form = new FormGroup({
      'name': new FormControl(exoTemplate.name, Validators.required),
      'imagePath': new FormControl(exoTemplate.imagePath, Validators.required),
      'comment': new FormControl(exoTemplate.comment, Validators.required),
      // TODO type exoTemplate'ingredients': this.getIngredients(exoTemplate)
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo : this.route})
  }
  onSubmit() {
    if (this.editMode) {
      this.recipeSvc.updateExoTemplate(this.id, this.form.value);
    } else {
      this.recipeSvc.addExoTemplate(this.form.value);
    }
    this.router.navigate(['..'], {relativeTo: this.route})
  }

  /*
  addIngredient() {
    (<FormArray> this.form.get('type')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[0-9]./)] )
      });
    );
  } */
  deleteIngredient(i: number) {
    (<FormArray>this.form.get('type')).removeAt(i);
  }
  getRecipe(): ExoTemplate {
    if (this.editMode) {
    return this.recipeSvc.getExoTemplate(this.id);
    }
    return new ExoTemplate('', '', '', [''] );
  }

/*
  getIngredients(recipe: Recipe) : FormArray{
    let formArray = new FormArray([]);
    for (let ingredients of recipe.type) {
      formArray.push(new FormGroup({
        'name': new FormControl(ingredients.name, [Validators.required]),
        'amount': new FormControl(ingredients.amount, [Validators.required, Validators.pattern(/^[0-9]/)])
      }))
    }
    return formArray;
  } */
}
