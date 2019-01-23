import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SeanceService} from '../../seance.service';
import {Exercise} from '../exercise.model';
import {ExoTemplate} from '../../../template-exo/ExoTemplate.model';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {


  exerciseList: Exercise[];

  constructor(private activatedRoute: ActivatedRoute,
              private seanceSvc: SeanceService) {
  }

  ngOnInit() {
    this.getExerciseList(+this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.getExerciseList(+params['id']);
      }
    );
    this.mock();
    console.log(this.exerciseList);
  }

  getExerciseList(index: number) {
    this.exerciseList = this.seanceSvc.getSeance(index).exercises;
  }

  mock() {
    this.exerciseList = [];
    const templateExo = new ExoTemplate('name', 'description', null, []);
    const exo = new Exercise(templateExo);
    this.exerciseList.push(exo);
    this.exerciseList.push(exo);
    this.exerciseList.push(exo);
    this.exerciseList.push(exo);
  }

}
