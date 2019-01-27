export class Serie {
  weight: number;
  repetition: number;
  id: number;

  constructor(weight: number, repetition: number) {
    this.weight = weight;
    this.repetition = repetition;
    this.id = Date.now();
  }
}
