export function score(x: number, y: number): number {
  const norm = Math.sqrt(x * x + y * y);

  if (norm <= 1) return 10;
  if (norm <= 5) return 5;
  if (norm <= 10) return 1;

  return 0;
}
