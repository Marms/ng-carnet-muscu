import {Output, EventEmitter, Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['']

})
export class HeaderComponent implements OnInit {

  constructor(private dataSvc: DataStorageService,
              private authSvc: AuthService) {
  }

  ngOnInit(): void {
    this.onFetch();
  }

  onSave() { //
    this.dataSvc.saveAll();
  }

  onFetch() {
    this.dataSvc.fetchAll();
  }

  onLogOut() {
    this.authSvc.logOut();
  }
}
