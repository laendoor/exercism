function aliquotList(number: number): number[] {
  if (number === 1) return [];
  const divisors = [1];
  const sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
      divisors.push(number / i);
    }
  }
  return [...new Set(divisors)];
}


export default class PerfectNumbers {
  static classify(n: number): string {
    if (n < 1) throw new Error('Classification is only possible for natural numbers.');
    const aliquotSum = aliquotList(n).reduce((a, b) => a + b, 0);
    
    if (aliquotSum > n) return 'abundant';
    if (aliquotSum < n) return 'deficient';
    return 'perfect';
  }
}
