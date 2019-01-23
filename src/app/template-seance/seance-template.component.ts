import {Component, OnInit, OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {SeanceTemplateService} from './seance-template.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-seance-template',
  templateUrl: './seance-template.component.html',
  styleUrls: ['./seance-template.component.css']
})
export class SeanceTemplateComponent implements OnInit, OnDestroy {

  constructor(private shopSvc: SeanceTemplateService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
