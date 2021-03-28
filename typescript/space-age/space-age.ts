const EARTH_YEAR_IN_SECONDS = 31557600;

const earthYears: Record<string, number> = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Earth: 1.0,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

const round = (number: number): number => Math.round(number * 100) / 100;

class SpaceAge {
  [key: string]: any

  constructor(public seconds: number) {
    for (let planet in earthYears) {
      this[`on${planet}`] = (): number => this.ageOn(planet);
    }
  }

  ageOn(planet: string): number {
    return round(this.seconds / EARTH_YEAR_IN_SECONDS / earthYears[planet]);
  };
}

export default SpaceAge;
