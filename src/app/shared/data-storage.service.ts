import {Http, Response} from '@angular/http';
import {Injectable, OnInit} from '@angular/core';
import {SeanceService} from '../seance/seance.service';
import {SeanceTemplateService} from '../template-seance/seance-template.service';
import {ExoTemplateService} from '../template-exo/exo-template.service';
import {ScTemplate} from '../template-seance/scTemplate.model';
import 'rxjs/add/operator/map';
import {ExoTemplate} from '../template-exo/ExoTemplate.model';
import {Seance} from '../seance/seance.model';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

/**
 * TODO mettre des références ID dans les objects
 * exemple templateID afin de ne pas sauvegarder deux fois l'object.
 * Reactive web app
 */
@Injectable()
export class DataStorageService {

  url = 'https://weightbook-548ca.firebaseio.com/';
  userId: string;
  idSubscriber: Subscription;

  constructor(private httpSvc: Http,
              private seanceSvc: SeanceService,
              private templateSeanceSvc: SeanceTemplateService,
              private templateExoSvc: ExoTemplateService,
              private authSvc: AuthService) {
    this.userId = this.authSvc.uid;
    this.idSubscriber = this.authSvc.idUserChanged.subscribe(
      (uid: string) => {
        this.userId = uid;
        this.url = this.url.concat(this.userId).concat('/');
      }
    );
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
    const seances = this.seanceSvc.getSeances();
    this.httpSvc.put(this.url + 'seances.json', seances).subscribe((response) => {
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
    const exoTemplates = this.templateExoSvc.getExoTemplates();
    this.httpSvc.put(this.url + 'template-exercises.json', exoTemplates)

      .subscribe((response) => {
        console.log(response);
      });

  }

  onFetchTemplateExo() {
    this.httpSvc.get(this.url + 'template-exercises.json')
      .map((response: Response) => {
        const templates: ExoTemplate[] = response.json();
        return templates != null ? templates : [];

      })
      .subscribe((templates: ExoTemplate[]) => {
        this.templateExoSvc.setExoTemplate(templates);
      });

  }

  onSaveTemplateSeance() {
    const templateSeances = this.templateSeanceSvc.getSeanceTemplates();
    this.httpSvc.put(this.url + 'template-seances.json', templateSeances)
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
