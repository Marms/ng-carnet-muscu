import {Input, Component, OnInit } from '@angular/core';
import { ExoTemplate } from '../ExoTemplate.model';
import { SeanceTemplateService } from '../../template-seance/seance-template.service';
import { ExoTemplateService } from '../exo-template.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './exo-template-detail.component.html',
  styleUrls: ['./exo-template-detail.component.css']
})
export class ExoTemplateDetailComponent implements OnInit {
  exoTemplate: ExoTemplate;
  id: number;

  constructor(private recSvc: ExoTemplateService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data: Params) => {
        this.id = +data['id'];
        console.log(this.id)
        this.exoTemplate = this.recSvc.getExoTemplate(this.id);
      }
    );
  }

  onDeleteRecipe() {
    this.recSvc.deleteExoTemplate(this.id);
    this.router.navigate(['/exoTemplates']);

  }

  onAddToShoppingList() {
    // TODO mettre le bon type ou voir si c'est encore utile this.recSvc.addToShoppingList(this.exoTemplate.type);
  }

  onEdit() {
      this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }
}
