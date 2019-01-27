import {Component, OnInit, OnDestroy} from '@angular/core';
import {SeanceTemplateService} from './seance-template.service';
import {DataStorageService} from '../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-seance-template',
  templateUrl: './seance-template.component.html',
  styleUrls: ['./seance-template.component.css']
})
export class SeanceTemplateComponent implements OnInit, OnDestroy {

  constructor(private shopSvc: SeanceTemplateService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private dataSvc: DataStorageService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onSave() {
    this.dataSvc.onSaveTemplateSeance();
  }
}
