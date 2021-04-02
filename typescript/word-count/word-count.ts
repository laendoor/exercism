type CounterMap = Map<string, number>;

function toCounterMap(map: CounterMap, word: string): CounterMap {
  const value = (map.get(word) ?? 0) + 1;
  return map.set(word, value);
}

export default class Words {
  count(text: string): CounterMap {
    return text
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .reduce(toCounterMap, new Map());
  }
}
