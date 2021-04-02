/**
 * https://brilliant.org/wiki/sum-of-n-n2-or-n3/
 */

export default class Squares {
  constructor(public n: number) {}

  get sumOfSquares(): number {
    return this.n * (this.n + 1) * (2 * this.n + 1) / 6;
  }

  get squareOfSum(): number {
    return (this.n * (this.n + 1) / 2) ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
