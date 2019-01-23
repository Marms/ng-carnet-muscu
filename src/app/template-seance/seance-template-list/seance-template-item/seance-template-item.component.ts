import {Component, Input, OnInit} from '@angular/core';
import {ScTemplate} from '../../scTemplate.model';
import {ActivatedRoute, Router} from '@angular/router';

/**
 * Component prend en input un item de type scTemplate et un index
 * l'index permet d'effectuer un routing
 */
@Component({
  selector: 'app-seance-template-item',
  templateUrl: './seance-template-item.component.html',
  styleUrls: ['./seance-template-item.component.css']
})
export class SeanceTemplateItemComponent implements OnInit {

  @Input('scTemplate') scTemplate: ScTemplate;
  @Input('index') index: number; // index dans la liste
  @Input('desactivateRoute') isRouteDeactivate;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
//    this.isRouteDeactivate = false;
  }


  onRoute() {
    if (!this.isRouteDeactivate) {
      this.router.navigate([this.index], {relativeTo: this.activatedRoute});

    }
  }
}
