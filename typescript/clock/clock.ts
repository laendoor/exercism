function leadZero(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

function toPositive(n: number, inc: number): number {
  if (n >= 0) return n;
  return toPositive(n + inc, inc);
}

export default class Clock {
  hour: number;
  minute: number;

  constructor(hour = 0, minute = 0) {
    const rest = Math.floor(minute / 60);
    this.hour = toPositive(hour + rest, 24) % 24;
    this.minute = toPositive(minute, 60) % 60;
  }

  toString(): string {
    return `${leadZero(this.hour)}:${leadZero(this.minute)}`;
  }

  plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes);
  }

  minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  equals(otherClock: Clock): boolean {
    return this.hour === otherClock.hour && this.minute === otherClock.minute;
  }
}
