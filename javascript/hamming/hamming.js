// Pre: dna1.length === dna2.length
const hammingDistance = (dna1, dna2) => {
  if (dna1.length === 0) return 0;
  const [char1, ...rest1] = dna1;
  const [char2, ...rest2] = dna2;
  return Number(char1 !== char2) + hammingDistance(rest1, rest2);
}

export const compute = (dna1, dna2) => {
  if (dna1.length === 0 && dna2.length > 0) throw new Error('left strand must not be empty');
  if (dna1.length > 0 && dna2.length === 0) throw new Error('right strand must not be empty');
  if (dna1.length !== dna2.length) throw Error('left and right strands must be of equal length');
  return hammingDistance([...dna1], [...dna2]);
};
