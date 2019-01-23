import {Component, OnInit} from '@angular/core';
import {SeanceService} from '../seance.service';
import {Seance} from '../seance.model';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {Exercise} from '../exercise/exercise.model';
import {SeanceTemplateService} from '../../template-seance/seance-template.service';
import {ExoTemplateService} from '../../template-exo/exo-template.service';

@Component({
  selector: 'app-seance-detail',
  templateUrl: './seance-detail.component.html',
  styleUrls: ['./seance-detail.component.css']
})
export class SeanceDetailComponent implements OnInit {

  seance: Seance;
  index: number;

  // recuperer l'index de la seance puis recuperer dans service
  constructor(private seanceSVC: SeanceService, private activeRoute: ActivatedRoute,
              private router: Router, private templateService: ExoTemplateService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.index = +param['id'];
      });

    this.seance = this.seanceSVC.getSeance(+this.activeRoute.snapshot.params['id']);
  }

  onAddExercise(index: number) {
    const exo = new Exercise(this.templateService.getExoTemplate(index));
    this.seance.exercises.push(exo);
    this.seanceSVC.updateSeance(this.index, this.seance);
    this.onEditExercise(exo.template.name);
  }

  onEditExercise(name: string) {
    this.router.navigate(['exercise', name], {relativeTo: this.activeRoute});
  }

  onEdit() {
    this.router.navigate(['add'], {relativeTo: this.activeRoute});
  }

  onDelete() {
    this.seanceSVC.deleteSeance(this.index);
    this.router.navigate(['seances']);
  }

}
