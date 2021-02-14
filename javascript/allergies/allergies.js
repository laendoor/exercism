const allergiesScores = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats',
};

const maxPowScore = (score, pow = 0) => {
  const number = Math.pow(2, pow);
  if (number === score) return number;
  if (number > score) return Math.pow(2, pow - 1);
  return maxPowScore(score, pow + 1);
}

const listScores = (score, list = []) => {
  if (score === 0) return list;
  const powScore = maxPowScore(score);
  const allergy = allergiesScores[powScore];
  return listScores(score - powScore, allergy ? [allergy, ...list] : list)
};

export class Allergies {
  constructor(score) {
    this.score = score;
    this.listScores = listScores(this.score);
  }

  list() {
    return this.listScores;
  }

  allergicTo(allergy) {
    return this.list().includes(allergy);
  }
}
