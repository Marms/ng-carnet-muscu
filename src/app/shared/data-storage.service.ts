import {Http, Response} from '@angular/http';
import {Injectable, OnInit} from '@angular/core';
import {SeanceService} from '../seance/seance.service';
import {SeanceTemplateService} from '../template-seance/seance-template.service';
import {ExoTemplateService} from '../template-exo/exo-template.service';
import {ScTemplate} from '../template-seance/scTemplate.model';
import 'rxjs/add/operator/map';
import {ExoTemplate} from '../template-exo/ExoTemplate.model';
import {Seance} from '../seance/seance.model';

/**
 * TODO mettre des références ID dans les objects
 * exemple templateID afin de ne pas sauvegarder deux fois l'object.
 * Reactive web app
 */
@Injectable()
export class DataStorageService implements OnInit {

  url = 'https://weightbook-548ca.firebaseio.com/';

  constructor(private httpSvc: Http,
              private seanceSvc: SeanceService,
              private templateSeanceSvc: SeanceTemplateService,
              private templateExoSvc: ExoTemplateService) {
  }

  ngOnInit() {
    this.url = 'https://weightbook-548ca.firebaseio.com/';
  }

  fetchAll() {
    this.onFetchTemplateExo();
    this.onFetchTemplateSeance();
    this.onFetchSeances();
  }

  saveAll() {
    this.onSaveSeances();
    this.onSaveTemplateExo();
    this.onSaveTemplateSeance();
  }

  onSaveSeances() {
    this.httpSvc.put(this.url + 'seances.json', this.seanceSvc.getSeances()).subscribe((response) => {
      console.log(response);
    });
  }

  onFetchSeances() {
    this.httpSvc.get(this.url + 'seances.json')
      .map((response: Response) => {
        const seances: Seance[] = response.json();
        for (const tmp of seances) {
          if (null == tmp.exercises) {
            tmp.exercises = [];
          }
          for (const exer of tmp.exercises) {
            if (null == exer.series) {
              exer.series = [];
            }
          }
        }
        return seances != null ? seances : [];
      })
      .subscribe((seance: Seance[]) => {
        this.seanceSvc.setSeances(seance);
      });
  }


  onSaveTemplateExo() {
    this.httpSvc.put(this.url + 'template-exercise.json', this.templateExoSvc.getExoTemplates())

      .subscribe((response) => {
        console.log(response);
      });

  }

  onFetchTemplateExo() {
    this.httpSvc.get(this.url + 'template-exercise.json')
      .map((response: Response) => {
        const templates: ExoTemplate[] = response.json();
        return templates != null ? templates : [];

      })
      .subscribe((templates: ExoTemplate[]) => {
        this.templateExoSvc.setExoTemplate(templates);
      });

  }

  onSaveTemplateSeance() {
    this.httpSvc.put(this.url + 'template-seances.json', this.templateSeanceSvc.getSeanceTemplates())
      .subscribe((response) => {
        console.log(response);
      });

  }

  onFetchTemplateSeance() {
    this.httpSvc.get(this.url + 'template-seances.json')
      .map(
        (response: Response) => {
          const data: ScTemplate[] = response.json();
          for (const tmp of data) {
            if (null == tmp.exoTemplateList) {
              tmp.exoTemplateList = [];
            }
          }
          return data != null ? data : [];
        }
      ).subscribe(
      (data: ScTemplate[]) => {
        this.templateSeanceSvc.setSeanceTemplates(data);
      }
    );


  }
}
