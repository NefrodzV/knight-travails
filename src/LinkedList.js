// Used to store the connections in a node
class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    if (this.head === null) {
      const node = new Node(value)
      this.head = node
      return
    }

    let currentNode = this.head

    while (currentNode.next != null) {
      currentNode = currentNode.next
    }

    // Adding the new node
    const node = new Node(value)
    currentNode.next = node
  }

  prepend(value) {
    if (this.head === null) {
      const node = new Node(value)
      return
    }
    // Saving the head somewhere
    let temp = this.head
    // Creating new node
    const node = new Node(value)
    node.next = temp
    this.head = node
  }

  size() {
    if (this.head === null) return 0
    let currentNodeSize = 1
    let currentNode = this.head
    while (currentNode.next != null) {
      currentNode = currentNode.next
      currentNodeSize++
    }

    return currentNodeSize
  }

  getHead() {
    return this.head
  }

  getTail() {
    let currentNode = this.head
    while (currentNode.next != null) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  at(index) {
    let currentIndex = 1
    let currentNode = this.head
    while (currentNode.next != null && currentIndex <= index) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode
  }

  pop() {
    let previousNode
    let currentNode = this.head
    while (currentNode.next != null) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    previousNode.next = null
  }

  contains(value) {
    let currentNode = this.head
    while (currentNode.next != null && currentNode.data !== value) {
      currentNode = currentNode.next
    }

    return currentNode.data === value
  }

  find(value) {
    let currentNode = this.head
    let currentIndex = 1
    while (currentNode.next != null && currentNode.data !== value) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode.data === value ? currentIndex : null
  }

  toString() {
    let currentNode = this.head
    let string = ""
    while (currentNode.next != null) {
      string = string + `(${currentNode.data}) -> `
      currentNode = currentNode.next
    }
    string = string + `(${currentNode.data}) -> null  `
    return string
  }
}
