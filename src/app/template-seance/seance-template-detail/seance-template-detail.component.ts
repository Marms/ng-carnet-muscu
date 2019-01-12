import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScTemplate} from '../scTemplate.model';
import {SeanceTemplateService} from '../seance-template.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';


@Component({
  selector: 'app-seance-template-detail',
  templateUrl: './seance-template-detail.component.html',
  styleUrls: ['./seance-template-detail.component.css']
})
export class SeanceTemplateDetailComponent implements OnInit {

  private scTemplate: ScTemplate;
  private index: number;

  constructor(private scTemplSvc: SeanceTemplateService, private router: Router, private activeRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.scTemplate = this.scTemplSvc.getSeanceTemplate(this.index);
      }
    );
    this.scTemplate = this.scTemplSvc.getSeanceTemplate(this.index);
  }

  onDelete() {
    this.scTemplSvc.deleteSeanceTemplate(this.index);
    this.router.navigate(['sc-template']);

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activeRoute});
  }

}
