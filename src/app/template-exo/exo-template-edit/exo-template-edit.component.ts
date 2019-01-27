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

    this.form = new FormGroup({
      'name': new FormControl(exoTemplate.name, Validators.required),
      'imagePath': new FormControl(exoTemplate.imagePath, Validators.required),
      'comment': new FormControl(exoTemplate.comment, Validators.required),
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    const exo: ExoTemplate = this.form.value;
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
