export class NucleotideCounts {
  static parse(dnaChain) {
    let str = dnaChain;
    const nucleotides = {};

    ['A', 'C', 'G', 'T'].forEach(nucleotide => {
      const rest = str.replaceAll(nucleotide, '');
      nucleotides[nucleotide] = str.length - rest.length;
      str = rest;
    });

    if (str.length > 0) throw new Error('Invalid nucleotide in strand');
    return Object.values(nucleotides).join(' ');
  }
}
