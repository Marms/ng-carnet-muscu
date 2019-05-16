import {Component, Input, OnInit} from '@angular/core';
import {Serie} from '../serie.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

@Input('serie') serie: Serie;
  constructor() { }

  ngOnInit() {
  }

}
