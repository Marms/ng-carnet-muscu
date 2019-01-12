import { Ingredient } from '../shared/ingredient.model';

export class ExoTemplate {
    public name: string;
    public imagePath: string;
    public comment: string;
    public type: string[];

  constructor(name: string, description: string, imagePath: string, ing: string[]) {
      this.name = name;
      this.comment = description;
      this.imagePath = imagePath;
      this.type = ing;
    }

}
