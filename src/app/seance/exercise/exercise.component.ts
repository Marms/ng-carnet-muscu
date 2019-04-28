import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SeanceService} from '../seance.service';
import {Seance} from '../seance.model';
import {Exercise} from './exercise.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Type} from '../../template-seance/seance-template-edit/type.model';

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

  /*  types = [
      new Type(1, 'NORMAL', true, 'btn-primary'),
      new Type(2, 'PDC', true, 'btn-success'),
      new Type(3, 'TRACTION', true, 'btn-warning'),
      new Type(4, 'TIME', true, 'btn-danger'),
    ];
  */
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private seanceSvc: SeanceService) {
  }

  ngOnInit() {
    this.initVars();
    this.initForms();
    this.seance.exercises = this.seance.exercises.filter(e => e.template.name !== this.name);
    this.seance.exercises.push(this.exercise);
  }

  private initForms() {
    this.form = new FormGroup(
      {
        'id': new FormControl(Date.now()),
        'repetition': new FormControl('', Validators.required),
        'weight': new FormControl('', Validators.required),
        'notation': new FormControl('NORMAL', Validators.required),
        'negative': new FormControl('false'),
        'force': new FormControl('false'),
        'comment': new FormControl('', Validators.required),
        'minute': new FormControl('', Validators.required),
        'seconde': new FormControl('', Validators.required)

      }
    );
  }


  showInput(id: string) {
    const notation = this.getNotation();
    if ((notation === 'NORMAL' || notation === 'TRACTION' ) && id === 'weight' ||
      id === 'repetition' || id === 'force' || id === 'negative' || id === 'comment') {
      return true;

    } else if (notation === 'TIME' && id === 'minute' || id === 'seconde' || id === 'comment') {
      return true;

    } else if (notation === 'PDC' && id === 'weight' || id === 'negative' || id === 'force' || id === 'comment' || id === 'repetition') {
      return true;
    }
    return false;
  }

  private getNotation() {
    return (<FormControl>this.form.get('notation')).value;
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
    console.log(this.form.value
    );
    if (this.isUpdate) {
      this.exercise.series[this.idSerie] = this.form.value;
      this.isUpdate = false;
    } else {
      const serie = this.form.value;
      serie.id = Date.now();
      this.exercise.series.push(serie);
    }
    this.form.reset();
    this.initForms();
  }


  onSerieSelected(index: number) {
    this.isUpdate = true;
    this.idSerie = index;
    const serie = this.exercise.series[index];
    (<FormControl>this.form.get('weight')).setValue(serie.weight);
    (<FormControl>this.form.get('repetition')).setValue(serie.repetition);
    (<FormControl>this.form.get('notation')).setValue(serie.notation);
    (<FormControl>this.form.get('negative')).setValue(serie.negative);
    (<FormControl>this.form.get('force')).setValue(serie.force);
    (<FormControl>this.form.get('comment')).setValue(serie.comment);
    (<FormControl>this.form.get('minute')).setValue(serie.minute);
    (<FormControl>this.form.get('seconde')).setValue(serie.seconde);
  }

  onSave() {
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }

  onDelete() {
    this.seance.exercises = this.seance.exercises.filter(e => e.template.name !== this.name);
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }
}
