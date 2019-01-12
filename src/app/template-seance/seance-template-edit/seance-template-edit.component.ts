import {OnChanges, Input, ViewChild, Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {SeanceTemplateService} from '../seance-template.service';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ScTemplate} from '../scTemplate.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {ExoTemplateService} from '../../template-exo/exo-template.service';


@Component({
  selector: 'app-seance-template-edit',
  templateUrl: './seance-template-edit.component.html',
  styleUrls: ['./seance-template-edit.component.css']
})
export class SeanceTemplateEditComponent implements OnInit, OnDestroy {
  slForm: FormGroup;
  editMode = false;
  editItemIndex: number;
  seanceTpl: ScTemplate;
  exoTplList: ExoTemplate[];

  constructor(private exoTemplateSvc: ExoTemplateService,
              private scService: SeanceTemplateService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.exoTplList = this.exoTemplateSvc.getExoTemplate();
    this.seanceTpl = new ScTemplate('', '', '');
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.editMode = param['id'] != null;
        this.editItemIndex = +param['id'];
        this.initForm();
      }
    );
  }

  initForm() {
    this.seanceTpl = new ScTemplate('', '', '');
    if (this.editMode) {
      this.seanceTpl = this.scService.getSeanceTemplate(this.editItemIndex);
    }
    this.slForm = new FormGroup({
      'name': new FormControl(this.seanceTpl.name, Validators.required),
      'comment': new FormControl(this.seanceTpl.comment, Validators.required),
      'exoTemplateList': this.mapExoTemplateListToFormArray(this.seanceTpl.exoTemplateList)
    });
  }

  mapExoTemplateListToFormArray(exoList: ExoTemplate[]): FormArray {
    const array: FormArray = new FormArray([]);
    for (const exo of exoList) {
      array.push(this.getFormGroup(exo));
    }
    return array;
  }

  private getFormGroup(exo) {
    return new FormGroup({
      'name': new FormControl(exo.name),
      'comment': new FormControl(exo.comment),
      'imagePath': new FormControl(exo.imagePath),
      'type': new FormControl(exo.type)
    });
  }

  mapFormGroupToExoTemplate(group: FormGroup): ExoTemplate {
    const exoTpl = new ExoTemplate(group.get('name').value,
      group.get('comment').value,
      group.get('imagePath').value,
      group.get('type').value);
    return exoTpl;

  }

  addToExoList(exoTpl: ExoTemplate) {
    this.seanceTpl.exoTemplateList.push(exoTpl);
    (<FormArray> this.slForm.get('exoTemplateList')).push(this.getFormGroup(exoTpl));
  }

  onSubmitItem() {
    const value = this.slForm.value;
    if (this.editMode) {
      this.scService.updateSeanceTemplate(this.editItemIndex, value);
    } else {
      this.scService.pushSeanceTemplate(value);
    }
    this.router.navigate(['..'], {relativeTo: this.activeRoute});
  }

  onDeleteButton() {
    this.scService.deleteSeanceTemplate(this.editItemIndex);
    this.router.navigate(['/sc-template']);

  }

  onClearButton() {
    this.slForm.reset();
  }

  removeItem(index: number) {
    (<FormArray> this.slForm.get('exoTemplateList')).removeAt(index);
  }

  groupToExoTemplate() {

  }
  ngOnDestroy() {
  }
}
