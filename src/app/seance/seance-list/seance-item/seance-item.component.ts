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

  name: string;

  constructor() {
  }

  ngOnInit() {
    if (this.seance.name !== null) {
      this.name = this.seance.name;
    } else {
      this.name = this.seance.template.name;
    }
  }

}
