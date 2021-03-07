export function triplets({ minFactor = 1, maxFactor, sum }) {
  const triplets = [];
  const max = maxFactor || sum / 2;
  for (let a = minFactor; a < max; a += 1) {
    for (let b = a + 1; b < max; b += 1) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      if (c < max && a + b + c === sum) triplets.push(new Triplet(a, b, c));
    }
  }
  return triplets.sort((t, u) => t.a - u.a);
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
