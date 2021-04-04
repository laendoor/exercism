const allergiesScores: Record<string, string> = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
};

function maxPowScore(score: number, pow: number = 0): number {
  const number = 2 ** pow;
  if (number === score) return number;
  if (number > score) return 2 ** (pow - 1);
  return maxPowScore(score, pow + 1);
}

function listScores(score: number, list: string[] = []): string[] {
  if (score === 0) return list;
  const powScore = maxPowScore(score);
  const allergy = allergiesScores[powScore];
  return listScores(score - powScore, allergy ? [allergy, ...list] : list)
}

export default class Allergies {
  private _list: string[];

  constructor(score: number) {
    this._list = listScores(score);
  }

  list(): string[] { return this._list; }

  allergicTo(allergy: string): boolean {
    return this._list.includes(allergy);
  }
}
