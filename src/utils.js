/** Depdeing on the node x, y coordinate it calculates the viable squares that a knight will jump
 * The board is presented as a cartesian plane with x , y coordinates
 */
const getViableKnightMoves = (node) => {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ]

  // Has to be more than this
  const bottomLimit = -1
  // Has to be lower than this
  const upperLimit = 8

  const viable = []
  for (let i = 0; i < moves.length; i++) {
    const sumOfX = moves[i][0] + node.x
    const sumOfY = moves[i][1] + node.y

    if (
      sumOfX > bottomLimit &&
      sumOfX < upperLimit &&
      sumOfY > bottomLimit &&
      sumOfY < upperLimit
    ) {
      // console.log("coordinates viable:" + sumOfX + "," + sumOfY + "index:" + i)
      viable.push(`${sumOfX}${sumOfY}`)
    }
  }

  return viable
}
export { getViableKnightMoves }
