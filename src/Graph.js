// A graph implemented as a adjacency list

import { chessMap } from "./chessMap"

export default class Graph {
  constructor(v) {
    // Number of vertices in the graph
    this.vertices = v
    this.adjacencyList = new Map()
  }

  addVertex(v) {
    this.adjacencyList.set(v, new Set())
  }

  addEdge(v, w) {
    const nodeV = chessMap.get(v)
    const nodeW = chessMap.get(w)
    this.adjacencyList.get(v).add(nodeW)

    // Since the graph is sparse or undirected we can push the other
    this.adjacencyList.get(w).add(nodeV)
  }

  shortestPath(start, end) {
    const prev = this.bfs(start, end)

    const path = this.reconstruct(start, end, prev)
  }
  bfs(start, end) {
    const q = []
    q.push(start)

    let found = false
    const visited = new Array(this.vertices)
    visited[start.index] = true

    const prev = new Array(this.vertices)
    prev[start.index] = start
    while (q.length !== 0 && !found) {
      const node = q.splice(0, 1)[0]
      const adjacents = this.adjacencyList.get(node.key)
      if (node.key === end.key) {
        found = true
      }
      for (const adjacent of adjacents) {
        if (!visited[adjacent.index]) {
          visited[adjacent.index] = true
          q.push(adjacent)
          prev[adjacent.index] = { previous: node, child: adjacent }
        }
      }
    }
    return prev
  }

  reconstruct(start, end, prev) {
    let current = prev[end.index]
    const path = []
    path.push(current.child)
    let steps = 0
    while (current.previous !== undefined) {
      steps++
      path.push(current.previous)
      current = prev[current.previous.index]
    }

    path.reverse()
    console.log(`Start: ${start.symbol} (x:${start.x}, y:${start.y})`)
    console.log(`End: ${end.symbol} (x:${end.x}, y:${end.y})`)
    console.log("Moves: " + steps)
    console.log("Path:")
    path.forEach((node) => {
      console.log(`${node.symbol} => (x:${node.x}, y:${node.y})`)
    })
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
      for (var j of get_values) conc += j.key + " "

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc)
    }
  }
}
