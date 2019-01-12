import { Component, OnInit } from '@angular/core';
import {ScTemplate} from '../scTemplate.model';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {ActivatedRoute, Router} from '@angular/router';
import {SeanceTemplateService} from '../seance-template.service';

@Component({
  selector: 'app-seance-template-list',
  templateUrl: './seance-template-list.component.html',
  styleUrls: ['./seance-template-list.component.css']
})
export class SeanceTemplateListComponent implements OnInit {

  scTemplateList: ScTemplate[] = [];

  constructor(private scTemplateSvc: SeanceTemplateService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.scTemplateList = this.scTemplateSvc.getSeanceTemplates();
  }

  onNewSeanceTemplate() {
    this.router.navigate(['new'], {relativeTo: this.activeRoute});
  }
}
