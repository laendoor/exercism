const bands: Record<string, number> = {
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

export const colorCode = (color: string): number => {
  return bands[color];
}

export const COLORS: Array<string> = Object.keys(bands);
