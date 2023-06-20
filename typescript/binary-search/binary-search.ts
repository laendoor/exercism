export function find(haystack: number[], needle: number): number {
  const length = haystack.length;

  if (length === 0 || (length === 1 && haystack[0] !== needle)) {
    throw new Error('Value not in array');
  }

  const pivotKey = Math.floor((length - 1) / 2);
  const pivotValue = haystack[pivotKey];
  
  if (needle === pivotValue) {
    return pivotKey;
  }

  if (needle > pivotValue) { 
    const innerPivotKey = find(haystack.slice(pivotKey + 1), needle);
    return 1 + pivotKey + innerPivotKey;
  }

  return find(haystack.slice(0, pivotKey), needle);
}
