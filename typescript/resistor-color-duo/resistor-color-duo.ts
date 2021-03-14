export class ResistorColor {
  private colors: string[]
  private colorBand = new Map()
    .set('black',  0)
    .set('brown',  1)
    .set('red',    2)
    .set('orange', 3)
    .set('yellow', 4)
    .set('green',  5)
    .set('blue',   6)
    .set('violet', 7)
    .set('grey',   8)
    .set('white',  9)

  constructor(colors: string[]) {
    if (colors.length < 2) throw new Error('At least two colors need to be present')
    this.colors = colors
  }

  value = (): number => 10 * this.colorBand.get(this.colors[0]) + this.colorBand.get(this.colors[1])
}
