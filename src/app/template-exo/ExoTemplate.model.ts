export class ExoTemplate {

  public id: number;
  public name: string;
  public imagePath: string;
  public comment: string;
  public type: string[];

  constructor(name: string, description: string, imagePath: string, ing: string[]) {
    this.name = name;
    this.comment = description;
    this.imagePath = imagePath;
    this.type = ing;
    this.id = Date.now();
  }

}
