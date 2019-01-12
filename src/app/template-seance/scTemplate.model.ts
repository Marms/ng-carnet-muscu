import {ExoTemplate} from '../template-exo/ExoTemplate.model';

export class ScTemplate {
  name: string;
  comment: string;
  imagePath: string;
  type: string[];
  exoTemplateList: ExoTemplate[];

/**
  constructor(  name: string, comment: string, imagePath: string, exoTemplateList: ExoTemplate[]) {
    this.name = name;
    this.comment = comment;
    this.imagePath = imagePath;
    this.exoTemplateList = exoTemplateList;
  }
*/
  constructor(  name: string, comment: string, imagePath: string) {
    this.name = name;
    this.comment = comment;
    this.imagePath = imagePath;
    this.exoTemplateList = [];
  }
}
