import Square from "./Square"
import Node from "./Node"
/** The key will be the index in the connections array which will hold the
 * linked list*/
const squaresMap = new Map()
// Not doing it with a for loop to know which index they represent in the array
squaresMap.set(0, new Node(new Square("a1", 0, 0, 0)))
squaresMap.set(1, new Node(new Square("a2", 0, 1, 1)))
squaresMap.set(2, new Node(new Square("a3", 0, 2, 2)))
squaresMap.set(3, new Node(new Square("a4", 0, 3, 3)))
squaresMap.set(4, new Node(new Square("a5", 0, 4, 4)))
squaresMap.set(5, new Node(new Square("a6", 0, 5, 5)))
squaresMap.set(6, new Node(new Square("a7", 0, 6, 6)))
squaresMap.set(7, new Node(new Square("a2", 0, 7, 7)))
// B
squaresMap.set(8, new Node(new Square("b1", 1, 0, 8)))
squaresMap.set(9, new Node(new Square("b2", 1, 1, 9)))
squaresMap.set(10, new Node(new Square("b3", 1, 2, 10)))
squaresMap.set(11, new Node(new Square("b4", 1, 3, 11)))
squaresMap.set(12, new Node(new Square("b5", 1, 4, 12)))
squaresMap.set(13, new Node(new Square("b6", 1, 5, 13)))
squaresMap.set(14, new Node(new Square("b7", 1, 6, 14)))
squaresMap.set(15, new Node(new Square("b8", 1, 7, 15)))
// C
squaresMap.set(16, new Node(new Square("c1", 2, 0, 16)))
squaresMap.set(17, new Node(new Square("c2", 2, 1, 17)))
squaresMap.set(18, new Node(new Square("c3", 2, 2, 18)))
squaresMap.set(19, new Node(new Square("c4", 2, 3, 19)))
squaresMap.set(20, new Node(new Square("c5", 2, 4, 20)))
squaresMap.set(21, new Node(new Square("c6", 2, 5, 21)))
squaresMap.set(22, new Node(new Square("c7", 2, 6, 22)))
squaresMap.set(23, new Node(new Square("c8", 2, 7, 23)))
// D
squaresMap.set(24, new Node(new Square("d1", 3, 0, 24)))
squaresMap.set(25, new Node(new Square("d2", 3, 1, 25)))
squaresMap.set(26, new Node(new Square("d3", 3, 2, 26)))
squaresMap.set(27, new Node(new Square("d4", 3, 3, 27)))
squaresMap.set(28, new Node(new Square("d5", 3, 4, 28)))
squaresMap.set(29, new Node(new Square("d6", 3, 5, 29)))
squaresMap.set(30, new Node(new Square("d7", 3, 6, 30)))
squaresMap.set(31, new Node(new Square("d8", 3, 7, 31)))
// E
squaresMap.set(32, new Node(new Square("e1", 4, 0, 32)))
squaresMap.set(33, new Node(new Square("e2", 4, 1, 33)))
squaresMap.set(34, new Node(new Square("e3", 4, 2, 34)))
squaresMap.set(35, new Node(new Square("e4", 4, 3, 35)))
squaresMap.set(36, new Node(new Square("e5", 4, 4, 36)))
squaresMap.set(37, new Node(new Square("e6", 4, 5, 37)))
squaresMap.set(38, new Node(new Square("e7", 4, 6, 38)))
squaresMap.set(39, new Node(new Square("e8", 4, 7, 39)))
// F
squaresMap.set(40, new Node(new Square("f1", 5, 0, 40)))
squaresMap.set(41, new Node(new Square("f2", 5, 1, 41)))
squaresMap.set(42, new Node(new Square("f3", 5, 2, 42)))
squaresMap.set(43, new Node(new Square("f4", 5, 3, 43)))
squaresMap.set(44, new Node(new Square("f5", 5, 4, 44)))
squaresMap.set(45, new Node(new Square("f6", 5, 5, 45)))
squaresMap.set(46, new Node(new Square("f7", 5, 6, 46)))
squaresMap.set(47, new Node(new Square("f8", 5, 7, 47)))
//G
squaresMap.set(48, new Node(new Square("g1", 6, 0, 48)))
squaresMap.set(49, new Node(new Square("g2", 6, 1, 49)))
squaresMap.set(50, new Node(new Square("g3", 6, 2, 50)))
squaresMap.set(51, new Node(new Square("g4", 6, 3, 51)))
squaresMap.set(52, new Node(new Square("g5", 6, 4, 52)))
squaresMap.set(53, new Node(new Square("g6", 6, 5, 53)))
squaresMap.set(54, new Node(new Square("g7", 6, 6, 54)))
squaresMap.set(55, new Node(new Square("g8", 6, 7, 55)))
// H
squaresMap.set(56, new Node(new Square("h1", 7, 0, 56)))
squaresMap.set(57, new Node(new Square("h2", 7, 1, 57)))
squaresMap.set(58, new Node(new Square("h3", 7, 2, 58)))
squaresMap.set(59, new Node(new Square("h4", 7, 3, 59)))
squaresMap.set(60, new Node(new Square("h5", 7, 4, 60)))
squaresMap.set(61, new Node(new Square("h6", 7, 5, 61)))
squaresMap.set(62, new Node(new Square("h7", 7, 6, 62)))
squaresMap.set(63, new Node(new Square("h1", 7, 7, 62)))

export default squaresMap
