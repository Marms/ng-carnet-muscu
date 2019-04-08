import {Component, OnInit, OnDestroy} from '@angular/core';
import {SeanceTemplateService} from '../seance-template.service';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ScTemplate} from '../scTemplate.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {ExoTemplateService} from '../../template-exo/exo-template.service';
import {Type} from './type.model';


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

  types = [
    new Type(1, 'PECTORAUX', true),
    new Type(2, 'DOS', true),
    new Type(3, 'JAMBES', true),
    new Type(4, 'ABDO', true),
    new Type(5, 'BRAS', true),
    new Type(6, 'MOLLETS', true),
    new Type(7, 'EPAULES', true)
  ];

  checked(i: number) {
    this.types[i].checked = !this.types[i].checked;
  }

  constructor(private exoTemplateSvc: ExoTemplateService,
              private scService: SeanceTemplateService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.exoTplList = this.exoTemplateSvc.getExoTemplates();
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
      'id': new FormControl(this.seanceTpl.id, Validators.required),
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
      'type': new FormControl(exo.type),
      'id': new FormControl(exo.id)
    });
  }

  mapFormGroupToExoTemplate(group: FormGroup): ExoTemplate {
    const exoTpl = new ExoTemplate(group.get('name').value,
      group.get('comment').value,
      group.get('imagePath').value,
      group.get('type').value);
    exoTpl.id = group.get('id').value;
    return exoTpl;
  }

  addToExoList(exoTpl: ExoTemplate) {
    this.seanceTpl.exoTemplateList.push(exoTpl);

    (<FormArray>this.slForm.get('exoTemplateList')).push(this.getFormGroup(exoTpl));
  }

  onSubmitItem() {
    const value = this.slForm.value;
    if (this.editMode) {
      this.scService.updateSeanceTemplate(this.editItemIndex, value);
    } else {
      value.id = Date.now();
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
    (<FormArray>this.slForm.get('exoTemplateList')).removeAt(index);
  }

  ngOnDestroy() {
  }
}
