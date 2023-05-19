export class Clock {
  hours;
  minutes;
  seconds;
  country;

  constructor(hours, minutes, seconds, country) {
    this.Hours = hours;
    this.Minutes = minutes;
    this.Seconds = seconds;
    this.Country = country;
    this.checkforZero = this.checkforZero.bind(this);
    this.show = this.show.bind(this);
  }

  set Hours(val) {
    this.hours = val;
  }
  set Minutes(val) {
    this.minutes = val;
  }
  set Seconds(val) {
    this.seconds = val;
  }
  set Country(val) {
    this.country = val;
  }

  get Hours() {
    return this.hours;
  }
  get Minutes() {
    return this.minutes;
  }
  get Seconds() {
    return this.seconds;
  }
  get Country() {
    return this.country;
  }

  convertToSeconds() {
    return this.Hours * 3600 + this.Minutes * 60 + this.seconds;
  }

  show() {
    return `
    <div class=times>
    ${this.Country}: ${this.checkforZero(this.Hours)}:${this.checkforZero(
      this.Minutes
    )}:${this.checkforZero(
      this.seconds
    )}<br>in seconds: ${this.convertToSeconds()}

    
    </div>`;
  }

  checkforZero(ints) {
    if (ints < 10) {
      return ints.toString().padStart(2, "0");
    }
    return ints;
  }
}
