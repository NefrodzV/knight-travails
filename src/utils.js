const isBottomEdgeSquare = (index) => {
  if (
    index === 0 ||
    index === 8 ||
    index === 16 ||
    index === 24 ||
    index === 32 ||
    index === 40 ||
    index === 48 ||
    index === 56
  )
    return true

  return false
}

const isRightEdgeSquare = (index) => {
  if (
    index === 56 ||
    index === 57 ||
    index === 58 ||
    index === 59 ||
    index === 60 ||
    index === 61 ||
    index === 62 ||
    index === 63
  )
    return true

  return false
}

const isUpperEdgeSquare = (index) => {
  if (
    index === 7 ||
    index === 15 ||
    index === 23 ||
    index === 31 ||
    index === 39 ||
    index === 47 ||
    index === 55
  )
    return true

  return false
}
export { isBottomEdgeSquare, isRightEdgeSquare, isUpperEdgeSquare }
