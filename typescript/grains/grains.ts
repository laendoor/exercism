export default class Grains {
  static square(x: number): number {
    if (x < 1 || x > 64) throw new Error();
    return 2 ** (x - 1);
  }
  static total(): number { return (2 ** 64) - 1; }
}
