import { Component, OnInit } from '@angular/core';
import { ExoTemplate } from './ExoTemplate.model';
import { ExoTemplateService } from './exo-template.service';

@Component({
  selector: 'app-exo-template',
  templateUrl: './exo-template.component.html',
  styleUrls: ['./exo-template.component.css'],
})
export class ExoTemplateComponent implements OnInit {
  exoTemplateSelected: ExoTemplate;

  constructor(private exoTemplateSvc: ExoTemplateService) { }

  ngOnInit() {
  /*  this.recipeSvc.exoTemplateSelected.subscribe(
      (exoTemplate: ExoTemplate) => {
        this.exoTemplateSelected = exoTemplate;
      }

    );*/
  }

}
