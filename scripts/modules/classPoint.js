export class Point {
  pointX;
  pointY;

  constructor(x, y) {
    this.PointX = x;
    this.PointY = y;
  }

  set PointX(val) {
    this.pointX = val;
  }
  set PointY(val) {
    this.pointY = val;
  }

  get PointX() {
    return this.pointX;
  }
  get PointY() {
    return this.pointY;
  }

  show() {
    return `(${this.PointX}, ${this.PointY})`;
  }

  equals(p) {
    if (!(p instanceof Point)) {
      return false;
    }

    if (p.PointX == this.PointX && p.PointY == this.PointY) {
      return true;
    } else return false;
  }

  static isCoordinatesInArray(pointArr, x, y) {
    let tempoint = new Point(x, y);
    return Point.isPointInArray(pointArr, tempoint);
  }

  static isPointInArray(pointArr, point) {
    for (let i = 0; i < pointArr.length; i++) {
      if (pointArr[i].equals(point) == true) {
        return true;
      }
    }
    return false;
  }

  static distance(p1, p2) {
    return Math.sqrt(
      (p1.PointX - p2.PointX) * (p1.PointX - p2.PointX) +
        (p1.PointY - p2.PointY) * (p1.PointY - p2.PointY)
    );
  }
}
