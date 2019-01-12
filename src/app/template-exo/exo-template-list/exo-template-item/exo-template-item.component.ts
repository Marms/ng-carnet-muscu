import {EventEmitter, Output, Input, Component, OnInit } from '@angular/core';
import { ExoTemplate } from '../../ExoTemplate.model';
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

  @Input('desactivateRoute') isRouteDeactivate;


  constructor(private recipeSvc: ExoTemplateService,
      private router: Router,
      private route: ActivatedRoute) {
  }

  onRoute() {
    if (!this.isRouteDeactivate) {
      this.router.navigate([this.index], {relativeTo: this.route});

    }
  }
  ngOnInit() {}

   /* create(exoTemplate: ExoTemplate) {
      console.log(exoTemplate)
      this.exoTemplate = exoTemplate;
    }*/
}
