import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';
import {SeanceService} from '../../seance.service';
import {Seance} from '../../seance.model';
import {Exercise} from '../exercise.model';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  name: string;
  id: number;
  exercices: Exercise[];

  constructor(private seanceSvc: SeanceService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['name'];
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getAllExercise();
  }

  getAllExercise() {

    const seances: Seance[] = this.seanceSvc.getSeances();

    this.exercices = seances.map(s => this.getExerciseOfSeance(s));
    this.exercices = this.exercices.filter(e => e !== undefined);
  }

  getExerciseOfSeance(s: Seance) {
    const exos: Exercise[] = s.exercises.filter(e => e.template.name === this.name);
    return null !== exos ? exos[0] : null;
  }
}
