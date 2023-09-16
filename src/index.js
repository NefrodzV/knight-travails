import "./style.css"
import {
  isBottomEdgeSquare,
  isRightEdgeSquare,
  isUpperEdgeSquare,
} from "./utils"
import { knightGraph } from "./knightGraph"
import { chessMap } from "./chessMap"
console.log("Hello webpack")
// chessboardGraph.printGraph()
// console.log(squaresMap.get(0).data)
// chessboardGraph.knightbfs(squaresMap.get(0), squaresMap.get(10))
// chessboardGraph.bfs(squaresMap.get(0))
// console.log(chessboardGraph)

// knightGraph.printGraph()
console.log(chessMap)

// const symbols = ["a", "b,", "c", "d", "e", "f", "g", "h"]
//
// for (let x = 0; x < 8; x++) {
//   console.log(`${symbols[x]}${x + 1}`)
//   for (let y = 0; y < 8; y++) {
//     console.log(`${x}${y}`)
//     console.log(`x:${x} y:${y}`)
//   }
// }
