const row = (k, prev) => new Array(k)
  .fill(1)
  .map((e, j) => (j > 0 && j < k - 1) ? prev[j - 1] + prev[j] : e);

export const rows = (n) => {
  const Rows = new Array(n).fill([]);
  Rows.forEach((_, j) => { Rows[j] = row(j + 1, Rows[j - 1]); });
  return Rows;
};
