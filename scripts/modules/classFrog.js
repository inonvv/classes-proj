export class Frog {
  name;
  color;
  age;
  weight;
  sound;

  constructor(name, color, age, weight) {
    this.Name = name;
    this.Color = color;
    this.Age = age;
    this.Weight = weight;
    this.sound = new Audio("/sounds/quack.mp3");
    this.Quak = this.Quak.bind(this);
  }

  set Name(val) {
    this.name = val;
  }
  set Color(val) {
    this.color = val;
  }
  set Age(val) {
    this.age = val;
  }
  set Weight(val) {
    this.weight = val;
  }
  set Sound(val) {
    this.sound = val;
  }
  get Sound() {
    return this.sound;
  }

  get Name() {
    return this.name;
  }
  get Color() {
    return this.color;
  }
  get Age() {
    return this.age;
  }
  get Weight() {
    return this.weight;
  }

  Show() {
    return `
    <p>hes name is: ${this.Name}</p>
    <p> he's color is ${this.Color}</p>
    <p> he's is ${this.Age} years old</p>
    <p> he's weights ${this.weight} kg</p>`;
  }

  Quak() {
    let str = "";
    this.sound.play();
    str += `<p>Quack!!</p>`;
    return str;
  }
}
