const luhnSum = (a, b, index) => {
  const c = index % 2 === 0 ? b : b * 2;
  return a + (c >= 10 ? c - 9 : c);
};

export const valid = strNumber => {
  if (strNumber.trim().length <= 1) return false;

  const numbers = strNumber
    .replaceAll(' ', '')
    .split('')
    .reverse()
    .map(Number);

  return !numbers.some(Number.isNaN)
      && numbers.reduce(luhnSum, 0) % 10 === 0;
};
