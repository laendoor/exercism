/**
 * https://brilliant.org/wiki/sum-of-n-n2-or-n3/
 */

export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    return this.n * (this.n + 1) * (2 * this.n + 1) / 6;
  }

  get squareOfSum() {
    return (this.n * (this.n + 1) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
