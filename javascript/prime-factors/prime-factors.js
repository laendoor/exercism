function primeFactorsList(number, list) {
  if (number === 1) return list;
  if (number % 2 === 0) return primeFactorsList(number / 2, [...list, 2]);
  for (let i = 3; i <= number; i += 2) {
    if (number % i === 0) return primeFactorsList(number / i, [...list, i]);
  }
}

export const primeFactors = number => primeFactorsList(number, []);
