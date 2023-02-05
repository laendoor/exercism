const rollDice = (): number => Math.ceil(Math.random() * 6);

export class DnDCharacter {
  public hitpoints: number;
  public constitution: number;
  public charisma: number;
  public dexterity: number;
  public intelligence: number;
  public strength: number;
  public wisdom: number;

  constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    return Array(4)
      .fill(0)
      .map(rollDice)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((sum, current) => sum + current);
  }

  // subtracting 10 from your character's constitution, divide by 2 and round down
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
