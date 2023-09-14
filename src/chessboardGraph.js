import Graph from "./Graph"
import {
  isBottomEdgeSquare,
  isRightEdgeSquare,
  isUpperEdgeSquare,
} from "./utils"

const CHESSBOARD_SQUARES = 64
const chessboardGraph = new Graph(CHESSBOARD_SQUARES)

// Create vertices or nodes
for (let i = 0; i < CHESSBOARD_SQUARES; i++) {
  chessboardGraph.addVertex(i)
}
for (let i = 0; i < CHESSBOARD_SQUARES; i++) {
  const currentVertex = i // Or Chessboard square
  const upperSquare = i + 1
  const leftSquare = i + 8
  const upperDiagonalSquare = i + 9
  const downDiagonalSquare = i + 7
  console.log(currentVertex)
  // CASE ITS A UPPER EDGE SQUARE
  if (isUpperEdgeSquare(currentVertex) && currentVertex !== 63) {
    console.log("Is upper")
    chessboardGraph.addEdge(currentVertex, leftSquare)
    chessboardGraph.addEdge(currentVertex, downDiagonalSquare)
    continue
  }

  // CASE ITS A RIGHT EDGE SQUARE
  if (isRightEdgeSquare(currentVertex) && currentVertex !== 63) {
    console.log("is Right edge")
    chessboardGraph.addEdge(currentVertex, upperSquare)
    continue
  }
  // CASE ITS A BOTTOM EDGE SQUARE
  if (isBottomEdgeSquare(currentVertex) && !isRightEdgeSquare(currentVertex)) {
    chessboardGraph.addEdge(currentVertex, upperSquare)
    chessboardGraph.addEdge(currentVertex, leftSquare)
    chessboardGraph.addEdge(currentVertex, upperDiagonalSquare)
    console.log("Bottom edge square")
    continue
  }

  if (currentVertex === 63) {
    break
  }

  //CASE ITS A MIDDLE SQUARE
  chessboardGraph.addEdge(currentVertex, upperSquare)
  chessboardGraph.addEdge(currentVertex, leftSquare)
  chessboardGraph.addEdge(currentVertex, upperDiagonalSquare)
  chessboardGraph.addEdge(currentVertex, downDiagonalSquare)
}

export default chessboardGraph
