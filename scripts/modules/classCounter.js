export class Counter {
  count;
  constructor() {
    this.Counter = 0;
  }

  set Counter(value) {
    this.count = value;
  }
  get Counter() {
    return this.count;
  }

  Initialize(value) {
    this.Counter = value;
  }
  Increment() {
    this.Counter++;
  }

  Go() {
    let str = "";
    for (let i = 0; i < this.Counter; i++) {
      str += `<p>${i}</p>`;
    }
    return str;
  }
}
