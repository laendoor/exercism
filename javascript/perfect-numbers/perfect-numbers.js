const aliquotList = number => {
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

export const classify = number => {
  if (number < 1) throw new Error('Classification is only possible for natural numbers.');
  const aliquotSum = aliquotList(number).reduce((a, b) => a + b, 0);
  if (aliquotSum > number) return 'abundant';
  if (aliquotSum < number) return 'deficient';
  return 'perfect';
};
