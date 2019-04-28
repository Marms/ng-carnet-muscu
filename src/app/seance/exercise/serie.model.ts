export class Serie {
  weight: number;
  repetition: number;
  id: number;
  negative: boolean;
  force: boolean;
  comment: string;
  minute: number;
  seconde: number;
  notation: string;

  constructor(weight: number, repetition: number) {
    this.weight = weight;
    this.repetition = repetition;
    this.id = Date.now();
  }

  build(weight: number, repetition: number, id: number, negative: boolean,
        force: boolean, comment: string, minute: number, seconde: number) {
    const serie = new Serie(weight, repetition);
    serie.id = id;
    serie.negative = negative;
    serie.force = force;
    serie.comment = comment;
    serie.minute = minute;
    serie.seconde = seconde;
  }
}
