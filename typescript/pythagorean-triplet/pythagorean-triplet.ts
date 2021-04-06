interface MinMax { minFactor?: number, maxFactor: number, sum?: number }

export default class Triplet {
  constructor(public a: number, public b: number, public c: number) {}

  public sum(): number { return this.a + this.b + this.c; }
  public product(): number { return this.a * this.b * this.c; }
  public isPythagorean(): boolean {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }

  public static where({ minFactor = 1, maxFactor, sum }: MinMax): Triplet[] {
    const triplets: Triplet[] = [];
    const max = sum ? sum / 2 : maxFactor;

    for (let a = minFactor; a < max; a += 1) {
      for (let b = a + 1; b < max; b += 1) {
        const c = Math.sqrt(a ** 2 + b ** 2);
        if (Number.isInteger(c) && c <= max) triplets.push(new Triplet(a, b, c));
      }
    }
    
    return triplets.filter(t => !sum || t.sum() === sum);
  }
}
