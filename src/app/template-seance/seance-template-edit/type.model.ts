export class Type {
  name: string;
  id: number;
  checked: boolean;

  constructor (id: number, name:string, checked: boolean) {
    this.id = id;
    this.name = name;
    this.checked = checked;
  }
}