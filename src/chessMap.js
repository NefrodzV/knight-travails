import Node from "./Node"

const chessMap = new Map()

// Generates the data for the chess map
const symbols = ["a", "b,", "c", "d", "e", "f", "g", "h"]
for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    const symbol = `${symbols[x]}${y + 1}`
    const key = `${x}${y}`
    chessMap.set(key, new Node(x, y, symbol))
  }
}

export { chessMap }
