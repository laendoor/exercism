type NucleotideMap = Record<string, number>;

export default class NucleotideCount {
  public static nucleotideCounts(dnaChain: string): NucleotideMap {
    let chain = dnaChain;
    const nucleotides: NucleotideMap = {};

    for (const n of ['A', 'C', 'G', 'T']) {
      const rest = chain.replaceAll(n, '');
      nucleotides[n] = chain.length - rest.length;
      chain = rest;
    }

    if (chain.length > 0) throw new Error('Invalid nucleotide in strand');
    return nucleotides;
  }
}
