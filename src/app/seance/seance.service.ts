import {Seance} from './seance.model';
import {Subject} from 'rxjs/Subject';

export class SeanceService {

  seancesChanged = new Subject<Seance[]>();
  seances: Seance[] = [];

  constructor() {
  }

  getSeances() {
    return this.seances.slice();
  }

  getSeance(index: number) {
    return this.seances[index];
  }

  setSeances(seance: Seance[]) {
    this.seances = seance;
    this.seancesChanged.next(this.seances);
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

