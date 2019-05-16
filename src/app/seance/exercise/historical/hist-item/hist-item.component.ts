import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from '../../exercise.model';

@Component({
  selector: 'app-hist-item',
  templateUrl: './hist-item.component.html',
  styleUrls: ['./hist-item.component.css']
})
export class HistItemComponent implements OnInit {

  @Input('exo') exercise: Exercise;
  @Input('index') index: number;
  @Input('date') date: Date;

  constructor() {
  }

  ngOnInit() {
  }

}
