function toTranspose(matrix: number[][], row: number[]): number[][] {
  return row.map((_, i) => (matrix[i] ?? []).concat(row[i]));
}

export default class Matrix {
  matrix: number[][];

  constructor(matrix: string) {
    this.matrix = matrix
      .split('\n')
      .map(row => row.split(' ').map(Number)); 
  }

  get rows(): number[][] { return this.matrix; }
  get columns(): number[][] { return this.matrix.reduce(toTranspose, []); }
}
