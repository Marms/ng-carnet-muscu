import {Seance} from './seance.model';
import {ScTemplate} from '../template-seance/scTemplate.model';
import {Subject} from 'rxjs/Subject';

export class SeanceService {

  seancesChanged = new Subject<Seance[]>();

  // mock
  seances: Seance[] = [new Seance(new ScTemplate('Full body', 'Pas le temps de niaser', ''))];

  constructor() {
  }

  getSeances() {
    return this.seances.slice();
  }

  getSeance(index: number) {
    return this.seances[index];
  }

  pushSeance(seance: Seance) {
    this.seances.push(seance);
    this.seancesChanged.next(this.getSeances());
  }

  updateSeance(index: number, seance: Seance) {
    this.seances[index] = seance;
    this.seancesChanged.next(this.getSeances());
  }

  deleteSeance(index: number) {
    this.seances.splice(index, 1);
    this.seancesChanged.next(this.getSeances());
  }
}

