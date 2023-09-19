import Graph from "./Graph"
import { chessMap } from "./chessMap"
import { getViableKnightMoves } from "./utils"

const SQUARES = 64
const knightGraph = new Graph(SQUARES)

for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    const vertexKey = `${x}${y}`
    knightGraph.addVertex(vertexKey)
  }
}

// Making the graph for knight
for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    const key = `${x}${y}`
    const currentNode = chessMap.get(key)
    const arr = getViableKnightMoves(currentNode)
    for (let i = 0; i < arr.length; i++) {
      knightGraph.addEdge(key, arr[i])
    }
  }
}
// Finding the shortest path
knightGraph.shortestPath(chessMap.get("33"), chessMap.get("43"))
export { knightGraph }
