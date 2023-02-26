let used: string[] = [];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MAX_COMBINATION = 325 * 120;

const randomName = (): string => {
  const l1 = Math.floor(Math.random() * letters.length);
  const l2 = Math.floor(Math.random() * letters.length);
  const n0 = Math.random().toString().replace(/^\d\./, '').slice(0, 3);
  return letters[l1] + letters[l2] + n0;
};

const uniqueRandomName = (): string => {
  let i = 0;
  let name = '';
  do {
    name = randomName();
    i += 1;
  } while (used.includes(name) && i < MAX_COMBINATION);

  return name;
}

export class Robot {
  private _name = '';
  
  constructor() {
    this.resetName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    const name = uniqueRandomName();
    used.push(name);
    this._name = name;
  }

  public static releaseNames(): void {
    used = [];
  }
}
