import {Component, Input, OnInit} from '@angular/core';
import {ExoTemplate} from '../../../../template-exo/ExoTemplate.model';
import {Exercise} from '../../exercise.model';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {

  @Input('index') index: number;
  @Input('exo') exo: Exercise;
  exoTemplate: ExoTemplate;

  constructor() {
    console.log('constur');
  }

  ngOnInit() {
    console.log('ok')
    this.exoTemplate = this.exo.template;
    console.log(this.exo.template);
  }


  onRoute() {
    console.log('on route');
  }
}

