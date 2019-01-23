import {Component, Input, OnInit} from '@angular/core';
import {Seance} from '../../seance.model';

@Component({
  selector: 'app-seance-item',
  templateUrl: './seance-item.component.html',
  styleUrls: ['./seance-item.component.css']
})
export class SeanceItemComponent implements OnInit {

  @Input('seance') seance: Seance;
  @Input('index') index: number;

  constructor() { }

  ngOnInit() {
  }

}
