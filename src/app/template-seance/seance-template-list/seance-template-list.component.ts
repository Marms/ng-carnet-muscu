import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScTemplate} from '../scTemplate.model';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {ActivatedRoute, Router} from '@angular/router';
import {SeanceTemplateService} from '../seance-template.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-seance-template-list',
  templateUrl: './seance-template-list.component.html',
  styleUrls: ['./seance-template-list.component.css']
})
export class SeanceTemplateListComponent implements OnInit, OnDestroy {

  scTemplateList: ScTemplate[] = [];
  listSubscription: Subscription;

  constructor(private scTemplateSvc: SeanceTemplateService) {
    this.listSubscription = scTemplateSvc.scTemplatesChanged.subscribe(
      (templates: ScTemplate[]) => {
        this.scTemplateList = templates;
      });

  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
  ngOnInit() {
    this.scTemplateList = this.scTemplateSvc.getSeanceTemplates();
  }
}
