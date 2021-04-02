type Scrabble = Record<string, number>;
type OldScrabble = Record<string, string[]>;

export default function transform(oldScrabble: OldScrabble): Scrabble {
  const scrabble: Scrabble = {};
  for (let [key, letters] of Object.entries(oldScrabble)) {
    letters.forEach(letter => scrabble[letter.toLowerCase()] = Number(key));
  }
  return scrabble;
}
