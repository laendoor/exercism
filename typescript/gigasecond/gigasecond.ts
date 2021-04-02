const GIGA_MS = 1e12; // 10^9 * 1000 = 10^12

export default class Gigasecond {
  constructor(private _date: Date) {}

  date(): Date {
    return new Date(this._date.getTime() + GIGA_MS);
  }
}
