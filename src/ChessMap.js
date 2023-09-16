import Node from "./Node"
export default class ChessMap {
  constructor() {
    this.coordinates = new Map()
    this.loadMapData()
  }

  loadMapData() {
    const symbols = ["a", "b,", "c", "d", "e", "f", "g", "h"]
    for (let x = 0; x < 8; x++) {
      const symbol = `${symbols[x]}${x + 1}`
      for (let y = 0; y < 8; y++) {
        const key = `${x}${y}`
        this.coordinates.set(key, new Node(x, y, symbol))
      }
    }
  }
}
