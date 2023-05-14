export class Square {
  sideLength;
  color;

  constructor(sideLength, color) {
    this.SideLength = sideLength;
    this.Color = color;
  }

  set SideLength(len) {
    this.sideLength = len;
  }

  set Color(col) {
    this.color = col;
  }

  get SideLength() {
    return this.sideLength;
  }

  get Color() {
    return this.color;
  }

  Print() {
    return `
    <div class="${this.Color}" style="height: ${
      this.SideLength * 10
    }px; width: ${this.SideLength * 10}px;"></div>`;
  }
}
