import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExoTemplate } from '../ExoTemplate.model';
import { ExoTemplateService } from '../exo-template.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-exo-template-list',
  templateUrl: './exo-template-list.component.html',
  styleUrls: ['./exo-template-list.component.css'],
})
export class ExoTemplateListComponent implements OnInit, OnDestroy {
  exoTemplates: ExoTemplate[];
  subscription: Subscription;


   constructor(private exoTemplateSvc: ExoTemplateService) { }

  ngOnInit() {
    this.subscription = this.exoTemplateSvc.exoTemplateChanged.subscribe(
      (recipes: ExoTemplate[]) => {
        this.exoTemplates = recipes;
      }
    );
    this.exoTemplates = this.exoTemplateSvc.getExoTemplates();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
