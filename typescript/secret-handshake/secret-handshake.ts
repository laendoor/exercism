const REVERSE_CODE = '10000';
const CODES: Record<string, string> = {
	'1': 'wink',
	'10': 'double blink',
	'100': 'close your eyes',
	'1000': 'jump',
};

export function commands(input: number): string[] {
  const bin = input
    .toString(2)
    .split('')
    .reverse()
    .map((b, i) => b.padEnd(i + 1, '0'))
    .filter(b => !b.startsWith('0'));
  
  if (bin[bin.length - 1] === REVERSE_CODE) {
    bin.pop();
    bin.reverse();
  }

  return bin.map(b => CODES[b]);
}
