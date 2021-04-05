interface Factors { minFactor?: number, maxFactor: number }
interface Palindrome { value: number, factors: number[][] }
interface PalindromeLimits { smallest: Palindrome, largest: Palindrome }

function isPalindrome(n: number): boolean {
  return n === Number(n.toString(10).split('').reverse().join(''));
}

function* palindromesInRange(from: number, to: number): Generator<Palindrome> {
  for (let i = from; i <= to; i += 1) {
    for (let j = i; j <= to; j += 1) {
      const product = i * j;
      if (isPalindrome(product)) yield { value: product, factors: [[i, j]] };
    }
  }
}

export default function generate({ minFactor = 1, maxFactor }: Factors): PalindromeLimits {
  let min: Palindrome = { value: Number.MAX_SAFE_INTEGER, factors: [] };
  let max: Palindrome = { value: 0, factors: [] };
  for (const palindrome of palindromesInRange(minFactor, maxFactor)) {
    if (palindrome.value === min.value) min.factors.push(palindrome.factors[0])
    if (palindrome.value === max.value) max.factors.push(palindrome.factors[0])
    if (palindrome.value < min.value) min = palindrome;
    if (palindrome.value > max.value) max = palindrome;
  }

  return { smallest: min, largest: max };
}
