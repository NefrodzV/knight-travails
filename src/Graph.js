// A graph implemented as a adjacency list

import squaresMap from "./squaresMap"

export default class Graph {
  constructor(v) {
    // Number of vertices in the graph
    this.vertices = v
    this.adjacencyList = new Map()
  }

  // Instead of array we can use a linked list
  // V is the name of the key in the adjacency list
  addVertex(v) {
    this.adjacencyList.set(v, [])
  }

  addEdge(v, w) {
    const squareV = squaresMap.get(v)
    const squareW = squaresMap.get(w)
    this.adjacencyList.get(v).push(squareW)

    // Since the graph is sparse or undirected we can push the other
    this.adjacencyList.get(w).push(squareV)
  }

  printGraph() {
    // get all the vertices
    var get_keys = this.adjacencyList.keys()

    // iterate over the vertices
    for (var i of get_keys) {
      // get the corresponding adjacency list
      // for the vertex
      var get_values = this.adjacencyList.get(i)
      var conc = ""

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j.data.symbol + " "

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc)
    }
  }
}
