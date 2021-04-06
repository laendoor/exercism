// This recursion is not optimal for larger numbers in JS
// but is simplest and easier to read
function primeFactors(n: number, factors: number[]): number[] {
  if (n === 1) return factors;
  if (n % 2 === 0) return primeFactors(n / 2, [...factors, 2]);
  
  let i = 3;
  while (n % i !== 0) i += 2;
  return primeFactors(n / i, [...factors, i]);
}

export default function calculatePrimeFactors(n: number): number[] {
  return primeFactors(n, []);
}
