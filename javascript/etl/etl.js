export const transform = (scrabble) => {
  const newScrabble = {};
  Object.entries(scrabble).forEach(([key, letters]) => {
    letters.forEach(letter => newScrabble[letter.toLowerCase()] = Number(key));
  });

  return newScrabble;
};
