const raindropSoundMap = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong',
};

const raindropSound = number => Object.keys(raindropSoundMap)
  .filter(n => number % n === 0)
  .map(n => raindropSoundMap[n])
  .join('');

export const convert = number => raindropSound(number) || `${number}`;
