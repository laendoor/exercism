const reverse = number => number.toString(10).split('').reverse().join('');

const isPalindrome = number => number.toString(10) === reverse(number);

function* palindromesInRange(from, to) {
  for (let i = from; i <= to; i += 1) {
    for (let j = i; j <= to; j += 1) {
      const product = i * j;
      if (isPalindrome(product)) yield { value: product, factors: [[i, j]] };
    }
  }
}

export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) throw new Error('min must be <= max');

    let min = { value: Number.MAX_SAFE_INTEGER, factors: [] };
    let max = { value: 0, factors: [] };
    for (let palindrome of palindromesInRange(minFactor, maxFactor)) {
      if (palindrome.value === min.value) min.factors.push(palindrome.factors[0])
      if (palindrome.value === max.value) max.factors.push(palindrome.factors[0])
      if (palindrome.value < min.value) min = palindrome;
      if (palindrome.value > max.value) max = palindrome;
    }

    max.value = max.value === 0 ? null : max.value;
    min.value = min.value === Number.MAX_SAFE_INTEGER ? null : min.value;
    return { smallest: min, largest: max };
  }
}
