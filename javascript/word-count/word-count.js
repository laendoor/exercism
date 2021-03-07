/**
 * This second version was improved based on slaymance's solution
 * https://exercism.io/tracks/javascript/exercises/word-count/solutions/acbd2c7b750a4e2e9099ceea989b97aa
*/

const toCounterMap = (map, word) => {
  map[word] = (map[word] || 0) + 1;
  return map;
};

export const countWords = text => text
  .toLowerCase()
  .match(/\w+('\w+)?/g)
  .reduce(toCounterMap, {});
