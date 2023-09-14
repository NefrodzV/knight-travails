const isBottomEdgeSquare = (index) => {
  const bottomEdgeSquares = [0, 8, 16, 24, 32, 40, 48, 56]
  return bottomEdgeSquares.includes(index)
}

const isRightEdgeSquare = (index) => {
  const leftEdgeSquares = [56, 57, 58, 59, 60, 61, 62, 63]

  return leftEdgeSquares.includes(index)
}

const isUpperEdgeSquare = (index) => {
  const upperEdgeSquares = [7, 15, 23, 31, 39, 47, 55]

  return upperEdgeSquares.includes(index)
}
export { isBottomEdgeSquare, isRightEdgeSquare, isUpperEdgeSquare }
