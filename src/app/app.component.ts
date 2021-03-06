import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'exoTemplate';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDXoVayGhdYAX9A7_2dXYHzHvhLl8TAKdo',
      authDomain: 'weightbook-548ca.firebaseapp.com'
    });
  }
}
