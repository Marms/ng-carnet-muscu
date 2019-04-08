import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SeanceService} from '../seance.service';
import {Seance} from '../seance.model';
import {ExoTemplateService} from '../../template-exo/exo-template.service';
import {ExoTemplate} from '../../template-exo/ExoTemplate.model';
import {Exercise} from '../exercise/exercise.model';
import {SeanceTemplateService} from '../../template-seance/seance-template.service';
import {Type} from '../../template-seance/seance-template-edit/type.model';

@Component({
  selector: 'app-seance-edit',
  templateUrl: './seance-add-exercices.component.html',
  styleUrls: ['./seance-add-exercices.component.css']
})
export class SeanceAddExercicesComponent implements OnInit {

  seance: Seance;
  exercicesTemplates: ExoTemplate[];


  types = [
    new Type(1, 'PECTORAUX', true, 'primary'),
    new Type(3, 'JAMBES', true, 'success'),
    new Type(4, 'ABDO', true, 'warning'),
    new Type(5, 'BRAS', true, 'danger'),
    new Type(2, 'DOS', true, 'primary'),
    new Type(6, 'MOLLETS', true, 'info'),
    new Type(7, 'EPAULES', true, 'warning')
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private exoTemplateSvc: ExoTemplateService,
              private seanceSvc: SeanceService,
              private scSvc: SeanceTemplateService) {
  }

  checked(index: number) {
    this.types[index].checked = !this.types[index].checked;
  }

  ngOnInit() {
    this.exercicesTemplates = this.exoTemplateSvc.getExoTemplates();
    this.getSeance(+this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.getSeance(+params['id']);
      }
    );
  }

  getSeance(index: number) {
    this.seance = this.seanceSvc.getSeance(index);
  }

  selected(name: string) {
    const exo = new Exercise(this.exercicesTemplates.filter(e => e.name === name)[0]);
    this.seance.exercises.push(exo);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
