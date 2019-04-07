import {Component, OnInit} from '@angular/core';
import {SeanceService} from '../seance.service';
import {Seance} from '../seance.model';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {Exercise} from '../exercise/exercise.model';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {DataStorageService} from '../../shared/data-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seance-detail',
  templateUrl: './seance-detail.component.html',
  styleUrls: ['./seance-detail.component.css']
})
export class SeanceDetailComponent implements OnInit {

  seance: Seance;
  index: number;
  form: FormGroup;

  constructor(private seanceSVC: SeanceService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.index = +param['id'];
      });

    this.seance = this.seanceSVC.getSeance(+this.activeRoute.snapshot.params['id']);

    if (this.seance.date === null) {
      this.seance.date = new Date();
    }
    console.log(this.seance.date);
    this.form = new FormGroup(
      {
        'date': new FormControl(this.seance.date),
        'name': new FormControl(this.seance.name),
      });
  }

  onAddExercise(template: ExoTemplate) {
    const exo = new Exercise(template);
    this.seance.exercises.push(exo);
    this.seanceSVC.updateSeance(this.index, this.seance);
    this.onEditExercise(exo.template.name);
  }

  onEditExercise(name: string) {
    this.router.navigate(['exercise', name], {relativeTo: this.activeRoute});
  }

  onEdit() {
    this.router.navigate(['add'], {relativeTo: this.activeRoute});
  }

  onDelete() {
    this.seanceSVC.deleteSeance(this.index);
    this.router.navigate(['seances']);
  }

  onSave() {
    const val = this.form.value;
    this.seance.date = val.date;
    this.seance.name = val.name;
    console.log(this.seance);
    this.seanceSVC.updateSeance(this.index, this.seance);
    this.router.navigate(['seances']);
  }
}
