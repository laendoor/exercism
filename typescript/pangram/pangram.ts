export default class Pangram {
  constructor(public text: string) {}

  isPangram(): boolean {
    return new Set(this.text.toLowerCase().replaceAll(/[^a-z]/g, '')).size === 26;
  }
}
