export class Car {
  manufactur;
  color;

  constructor(manufactur, color) {
    this.Manufactur = manufactur;
    this.Color = color;
  }
  set Manufactur(name) {
    this.manufactur = name;
  }
  set Color(colorr) {
    this.color = colorr;
  }

  get Manufactur() {
    return this.manufactur;
  }

  get Color() {
    return this.color;
  }

  Print() {
    return `
    <div class="car-card">
    <h1>${this.Manufactur}</h1<br/>
    <p>${this.Color}</p></div>`;
  }
}
