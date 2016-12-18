// Implement a directed graph
// It is a collection of nodes that have edges between some of them
// Directed edges point in one direction (undirected edges point both ways)

class DirectedGraph {
  constructor() {
    this.nodes = {};
    this.size = 0;
  }

  addNode(val) {
    if (this.nodes[val]) { return false; } // node already exists with that value

    var newNode = new Node(val);
    this.nodes[val] = newNode;
    this.size++;
    return true;
  }

  addEdge(fromVal, toVal) {
    if (!this.nodes[fromVal] || !this.nodes[toVal]) { return false; } // nodes do not exist

    var fromNode = this.nodes[fromVal];
    fromNode.edges[toVal] = this.nodes[toVal];
  }

  removeNode(val) {
    if (!this.nodes[val]) { return false; } // node does not exist

    // all nodes that connect to this node must have the correpsonding edge removed

    this.size--;
    return val;
  }

  removeEdge(val1, val2) {
    
  }

  getConnections(val) {
    
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.edges = {};
  }
}

export default DirectedGraph;