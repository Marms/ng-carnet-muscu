import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ExoTemplateService} from '../exo-template.service';
import {ExoTemplate} from '../ExoTemplate.model';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-exo-template-edit',
  templateUrl: './exo-template-edit.component.html',
  styleUrls: ['./exo-template-edit.component.css']
})
export class ExoTemplateEditComponent implements OnInit {

  id: number;
  editMode: boolean;
  form: FormGroup;

  types = [
    {id: 1, name: 'PECTORAUX'},
    {id: 2, name: 'DOS'},
    {id: 3, name: 'JAMBES'},
    {id: 4, name: 'ABDO'},
    {id: 5, name: 'BRAS'},
    {id: 6, name: 'MOLLETS'}
  ];


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
    const exoTemplate: ExoTemplate = this.getExoTemplate();
    const formControls = this.types.map(control => new FormControl(this.isSelected(control, exoTemplate.type)));
    this.form = new FormGroup({
      'name': new FormControl(exoTemplate.name, Validators.required),
      'imagePath': new FormControl(exoTemplate.imagePath, Validators.required),
      'comment': new FormControl(exoTemplate.comment, Validators.required),
      'types': new FormArray(formControls)
    });
  }

  isSelected(o: { id: number, name: string }, type: string[]) {
    if (null === type || type === undefined) {
      return false;
    }
    return type.includes(o.name) ? true : false;

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    const exo: ExoTemplate = this.form.value;
    exo.type = this.form.value.types
      .map((checked, index) => checked ? this.types[index].name : null)
      .filter(value => value !== null);

    if (this.editMode) {
      this.recipeSvc.updateExoTemplate(this.id, exo);
    } else {
      exo.id = Date.now();
      this.recipeSvc.addExoTemplate(exo);
    }
    this.onCancel();
  }

  getExoTemplate(): ExoTemplate {
    if (this.editMode) {
      return this.recipeSvc.getExoTemplate(this.id);
    }
    return new ExoTemplate('', '', '', ['']);
  }
}
