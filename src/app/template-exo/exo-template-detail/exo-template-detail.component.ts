import {Input, Component, OnInit} from '@angular/core';
import {ExoTemplate} from '../ExoTemplate.model';
import {SeanceTemplateService} from '../../template-seance/seance-template.service';
import {ExoTemplateService} from '../exo-template.service';
import {Router, ActivatedRoute, Data, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './exo-template-detail.component.html',
  styleUrls: ['./exo-template-detail.component.css']
})
export class ExoTemplateDetailComponent implements OnInit {
  exoTemplate: ExoTemplate;
  id: number;

  constructor(private exoTmpSvc: ExoTemplateService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data: Params) => {
        this.id = +data['id'];
        this.exoTemplate = this.exoTmpSvc.getExoTemplate(this.id);
      }
    );
  }

  onDeleteTemplate() {
    this.exoTmpSvc.deleteExoTemplate(this.id);
    this.router.navigate(['/exoTemplates']);

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

}
