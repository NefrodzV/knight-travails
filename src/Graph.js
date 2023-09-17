// A graph implemented as a adjacency list

import { chessMap } from "./chessMap"

export default class Graph {
  constructor(v) {
    // Number of vertices in the graph
    this.vertices = v
    this.adjacencyList = new Map()
  }

  // Instead of array we can use a linked list
  // V is the name of the key in the adjacency list
  addVertex(v) {
    this.adjacencyList.set(v, new Set())
  }

  addEdge(v, w) {
    const nodeV = chessMap.get(v)
    const nodeW = chessMap.get(w)
    // console.log(v)
    // console.log(w)
    // console.log(nodeV)
    // console.log(nodeW)
    this.adjacencyList.get(v).add(nodeW)

    // Since the graph is sparse or undirected we can push the other
    this.adjacencyList.get(w).add(nodeV)
  }

  traverse(start, end) {}

  knightbfs(start, end) {
    // console.log(start)
    // console.log(end)
    const q = []
    q.push(start)

    const node = q.splice(0, 1)[0]

    const adjacents = this.adjacencyList.get(node.data.number)
    // console.log(adjacents)
    const possibleMovesInX = [-1, -1, 1, 1, -2, -2, 2, 2]

    for (let i = 0; i < adjacents.length; i++) {
      for (let j = 0; j < possibleMovesInX; j++) {
        if (node.data.x + possibleMovesInX[i] === adjacents[i].data.x) {
          console.log("one found")
        }
      }
    }

    // if (node.data.x + possibleMovesInX[2] === adjacents[2].data.x) {
    //   possibleMovesInX[2] = 0
    //   console.log(possibleMovesInX)
    //   console.log(adjacents[2])
    // }

    // while(q.length !== 0) {
    //   const node = q.splice(0, 1)
    //   const adjacent = this.adjacencyList.get(node)
    // }
    //

    //     const possibleMovesInY = [2, -2, 2, -2, -1, 1, 1, -1]
    //     const node = q.slice(0, 1)[0]
    //     const neighbours = this.adjacencyList.get(node.data.number)
  }
  // Does bfs one by one
  bfs(start) {
    // console.log(start.data)
    const q = []
    q.push(start)

    const visited = new Array(this.vertices - 1)
    console.log(visited)
    visited[start.data.number] = true
    const prev = new Array(this.vertices - 1)
    while (q.length !== 0) {
      const node = q.splice(0, 1)
      console.log("node visited")
      console.log(node[0].data.number)
      const neighbours = this.adjacencyList.get(node[0].data.number)

      for (let i = 0; i < neighbours.length; i++) {
        if (!visited[neighbours[i].data.number]) {
          q.push(neighbours[i])
          visited[neighbours[i].data.number] = true
          prev[neighbours[i].data.number] = node
        }
      }
    }
    console.log("previous")
    console.log(visited)
    console.log(prev)
    return prev
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
