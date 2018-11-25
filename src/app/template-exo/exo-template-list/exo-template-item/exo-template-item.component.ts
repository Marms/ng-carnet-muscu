import {EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { ExoTemplate } from '../../recipe.model';
import { ExoTemplateService } from '../../exo-template.service';

import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-exo-template-item',
  templateUrl: './exo-template-item.component.html',
  styleUrls: ['./exo-template-item.component.css'],
})
export class ExoTemplateItemComponent implements OnInit {

  @Input() exoTemplate: ExoTemplate;
  @Input() index: number;

  constructor(private recipeSvc: ExoTemplateService,
      private router: Router,
      private route: ActivatedRoute) {
  }

  ngOnInit() {}

   /* create(exoTemplate: ExoTemplate) {
      console.log(exoTemplate)
      this.exoTemplate = exoTemplate;
    }*/
}
