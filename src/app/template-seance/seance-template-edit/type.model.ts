
export class Type {
  name: string;
  id: number;
  checked: boolean;
  css: string;

  constructor (id: number, name:string, checked: boolean, css: string) {
    this.id = id;
    this.name = name;
    this.checked = checked;
    this.css = css;
  }

  
}
