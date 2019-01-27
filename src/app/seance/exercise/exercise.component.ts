import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SeanceService} from '../seance.service';
import {Seance} from '../seance.model';
import {Exercise} from './exercise.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  form: FormGroup;
  seance: Seance;
  exercise: Exercise;
  id: number;
  name: string;
  isUpdate: boolean;
  idSerie: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private seanceSvc: SeanceService) {
  }

  ngOnInit() {
    this.initVars();
    this.form = new FormGroup(
      {
        'id': new FormControl(Date.now()),
        'repetition': new FormControl('', Validators.required),
        'weight': new FormControl('', Validators.required)
      }
    );
    this.seance.exercises = this.seance.exercises.filter(e => e.template.name !== this.name);
    this.seance.exercises.push(this.exercise);
  }

  initVars() {
    this.isUpdate = false;
    const snapParams = this.activatedRoute.snapshot.params;
    this.setParams(snapParams['id'], snapParams['name']);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.setParams(+params['id'], params['name']);
      }
    );
  }

  setParams(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.seance = this.seanceSvc.getSeance(this.id);
    this.exercise = this.seance.exercises.filter(e => e.template.name === this.name)[0];
  }

  onSubmit() {
    if (this.isUpdate) {
      this.exercise.series[this.idSerie] = this.form.value;
      this.isUpdate = false;
    } else {
      const serie = this.form.value;
      serie.id = Date.now();
      this.exercise.series.push(serie);
    }
    this.form.reset();
  }

  onSerieSelected(index: number) {
    this.isUpdate = true;
    this.idSerie = index;
    const serie = this.exercise.series[index];
    (<FormControl>this.form.get('weight')).setValue(serie.weight);
    (<FormControl>this.form.get('repetition')).setValue(serie.repetition);
    (<FormControl>this.form.get('id')).setValue(serie.id);
  }

  onSave() {
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }

  onDelete() {
    this.seance.exercises = this.seance.exercises.filter(e => e.template.name !== this.name);
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }
}
