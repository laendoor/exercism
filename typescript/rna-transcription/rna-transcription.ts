function throwError(): string {
  throw new Error('Invalid input DNA.');
}

const complements: Record<string, string> = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

function rnaComplement(nucleotide: string): string {
  return complements[nucleotide] ?? throwError();
}

class Transcriptor {
  toRna(dna: string): string {
    return dna.split('').map(rnaComplement).join('');
  }
}

export default Transcriptor;
