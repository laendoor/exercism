const leadZero = number => number < 10 ? `0${number}` : `${number}`;

const toPositive = (number, increment) => {
  if (number >= 0) return number;
  return toPositive(number + increment, increment);
};

export class Clock {
  constructor(hour = 0, minute = 0) {
    this.set(hour, minute);
  }

  set(hour, minute) {
    const rest = Math.floor(minute / 60);
    this.hour = toPositive(hour + rest, 24) % 24;
    this.minute = toPositive(minute, 60) % 60;
  }

  toString() {
    return `${leadZero(this.hour)}:${leadZero(this.minute)}`;
  }

  plus(minutes) {
    this.set(this.hour, this.minute + minutes);
    return this;
  }

  minus(minutes) {
    this.set(this.hour, this.minute - minutes);
    return this;
  }

  equals(otherClock) {
    return this.hour === otherClock.hour && this.minute === otherClock.minute;
  }
}
