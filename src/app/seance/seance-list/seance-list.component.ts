import {Component, OnInit} from '@angular/core';
import {SeanceService} from '../seance.service';
import {Seance} from '../seance.model';
import {Subscription} from 'rxjs/Subscription';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent implements OnInit {

  seances: Seance[];
  seanceChangedSubscription: Subscription;
  constructor(private seanceSVC: SeanceService,
              private dataSvc: DataStorageService) {
  }

  ngOnInit() {
    this.seances = this.seanceSVC.getSeances();
    this.seanceChangedSubscription = this.seanceSVC.seancesChanged.subscribe(
      (seances: Seance[]) => {
        this.seances = seances;
      }
    );
  }

  onSave() {
    this.dataSvc.onSaveSeances();
  }


}
