/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

const pow2 = sq => 2n ** BigInt(sq);

export const square = sq => {
  if (sq < 1 || sq > 64) throw new Error('square must be between 1 and 64');
  return pow2(sq - 1);
};

export const total = () => pow2(64) - 1n;
