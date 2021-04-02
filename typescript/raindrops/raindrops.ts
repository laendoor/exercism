const raindropSoundMap: Record<string, string> = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong',
};

function raindropSound(number: number): string {
  return Object.keys(raindropSoundMap)
    .filter(n => number % +n === 0)
    .map(n => raindropSoundMap[n])
    .join('');
}

export default class Raindrops {
  convert(number: number): string {
    return raindropSound(number) || `${number}`;
  }
}
