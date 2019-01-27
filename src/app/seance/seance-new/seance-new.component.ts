import { Component, OnInit } from '@angular/core';
import {SeanceTemplateService} from '../../template-seance/seance-template.service';
import {ScTemplate} from '../../template-seance/scTemplate.model';
import {Router} from '@angular/router';
import {Seance} from '../seance.model';
import {SeanceService} from '../seance.service';

@Component({
  selector: 'app-seance-new',
  templateUrl: './seance-new.component.html',
  styleUrls: ['./seance-new.component.css']
})
export class SeanceNewComponent implements OnInit {

  scTemplateList: ScTemplate[];

  constructor(private seanceSvc: SeanceService, private scTemplateSvc: SeanceTemplateService
              , private router: Router) { }

  ngOnInit() {
    this.scTemplateList = this.scTemplateSvc.getSeanceTemplates();
    console.log(this.scTemplateList);
  }

  selected(index: number) {
    this.seanceSvc.pushSeance(new Seance(this.scTemplateSvc.getSeanceTemplate(index)));
    this.router.navigate(['seances']) ;
  }
}
