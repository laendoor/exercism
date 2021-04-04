export default class CollatzConjecture {
  static steps(n: number): number {
    if (n < 1) throw new Error('Only positive numbers are allowed');
    if (n === 1) return 0;
    const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
    return 1 + this.steps(next);
  }
}
