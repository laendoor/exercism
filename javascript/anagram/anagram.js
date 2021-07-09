const sorted = word => word.split('').sort().join('');

export const findAnagrams = (word, candidates) => {
  const lowerWord = word.toLowerCase();
  const sortedWord = sorted(lowerWord);
  return candidates
    .filter(w => w.toLowerCase() !== lowerWord && sorted(w.toLowerCase()) === sortedWord)
};
