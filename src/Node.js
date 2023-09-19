export default class Node {
  constructor(x, y, symbol) {
    this.x = x
    this.y = y
    this.symbol = symbol
    this.key = `${x}${y}`
    this.index
  }
}
