const toInt = number => Number.parseInt(number, 10);

const transpose = matrix => matrix
  .reduce((T, row) => row.map((_, i) => (T[i] ?? []).concat(row[i])), []);

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
      .split('\n')
      .map(row => row.split(' ').map(toInt)); 
  }

  get rows() { return this.matrix; }
  get columns() { return transpose(this.matrix); }
}
