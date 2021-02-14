const complement = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
};

const rnaComplement = nucleotide => complement[nucleotide] || '';

export const toRna = adn => adn.split('').map(rnaComplement).join('');
