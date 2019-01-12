import {Component, Input, OnInit} from '@angular/core';
import {ScTemplate} from '../../scTemplate.model';

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
  constructor() { }

  ngOnInit() {}

}
