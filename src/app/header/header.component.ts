import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['']

})
export class HeaderComponent {

  constructor(private dataSvc: DataStorageService) {}

  onSave() { //
    this.dataSvc.saveAll();
  }

  onFetch() {
    this.dataSvc.fetchAll();
  }
}
