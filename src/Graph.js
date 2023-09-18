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

      for (const adjacent of adjacents) {
        // if (adjacent.key === end.key) {
        //   console.log(adjacent)
        //   prev[adjacent.index] = { previous: node, child: adjacent }
        //   found = true
        //   break
        // }
        if (!visited[adjacent.index]) {
          visited[adjacent.index] = true
          q.push(adjacent)
          prev[adjacent.index] = { previous: node, child: adjacent }
        }
      }
    }

    console.log(prev)

    //getting rid of null values
    return prev.filter((value) => value != null)
  }

  reconstruct(start, end, prev) {
    console.log("prev passed")
    console.log(prev)
    const path = []
    path.push(end)

    // path.push(prev[prev.length - 1].previous)
    const last = path[path.length - 1]
    console.log(last.key)

    let pathfound = false
    let lastIndex = false
    for (let i = prev.length - 1; i >= 0; i--) {
      const last = path[path.length - 1]
      const node = prev[i]
      if (node.key === start.key) {
        path.push(node)
        break
      }
      if (node.child.key === last.key) {
        path.push(node.previous)
      }
    }

    console.log("shortest path")
    console.log(path)
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
