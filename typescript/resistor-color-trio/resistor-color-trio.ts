const bandValues: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export function decodedResistorValue(resistors: string[]) {
  const [band1, band2, band3] = resistors.map(r => bandValues[r]);
  const value = Number.parseInt(`${band1}${band2}`) * (10 ** band3);
  return value > 1000
    ? `${value / 1000} kiloohms`
    : `${value} ohms`;
}
