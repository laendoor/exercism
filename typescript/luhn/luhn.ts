function luhnSum(a: number, b: number, index: number): number {
  const c = index % 2 === 0 ? b : b * 2;
  return a + (c >= 10 ? c - 9 : c);
}

export default class Luhn {
  public static valid(strNumber: string): boolean {
    if (strNumber.trim().length <= 1) return false;

    const numbers = strNumber
      .replaceAll(' ', '')
      .split('')
      .reverse()
      .map(Number);
  
    return !numbers.some(Number.isNaN)
        && numbers.reduce(luhnSum, 0) % 10 === 0;
  }
}