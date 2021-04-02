function equilateral(a: number, b: number, c: number): string {
  return (a === b && b === c) ? 'equilateral' : '';
}

function scalene(a: number, b: number, c: number): string {
  return (a !== b && a !== c && b !== c) ? 'scalene' : '';
}

export default class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind(): string {
    const [a, b, c] = this.sides.sort((a, b) => a - b);
    if(a <= 0 || a + b <= c) throw new Error();
    return equilateral(a, b, c) || scalene(a, b, c) || 'isosceles';
  }
}
