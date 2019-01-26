import { Component, OnInit } from '@angular/core';
import { ExoTemplateService } from './exo-template.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-exo-template',
  templateUrl: './exo-template.component.html',
  styleUrls: ['./exo-template.component.css'],
})
export class ExoTemplateComponent implements OnInit {

  constructor(private exoTemplateSvc: ExoTemplateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dataSvc: DataStorageService) { }

  ngOnInit() {
  }

  onSave() {
    this.dataSvc.onSaveTemplateExo();
  }
  onNewExoTemplate() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}
