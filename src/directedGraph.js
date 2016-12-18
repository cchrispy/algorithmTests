// Implement a directed graph (unidirectional pointers)
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
    if (!this.nodes[fromVal] 
        || !this.nodes[toVal] 
        || fromVal === toVal) { return false; } // nodes do not exist or they are the same node

    var fromNode = this.nodes[fromVal];
    fromNode.edges[toVal] = this.nodes[toVal];
  }

  removeNode(val) {
    if (!this.nodes[val]) { return false; } // node does not exist

    // all nodes that connect to this node must have the correpsonding edge removed
    for (var prop in this.nodes) {
      this.removeEdge(prop, val);
    }
    delete this.nodes[val];

    this.size--;
    return val;
  }

  removeEdge(fromVal, toVal) {
    if (!this.nodes[fromVal] 
        || !this.nodes[toVal] 
        || fromVal === toVal) { return false; } // nodes do not exist or are the same nodes

    var fromNode = this.nodes[fromVal];
    delete fromNode.edges[toVal];
    return true;
  }

  getConnections(val) {
    if (!this.nodes[val]) { return false; } // node does not exist

    var res = [];
    var node = this.nodes[val];

    for (var prop in node.edges) {
      res.push(node.edges[prop].val);
    };

    return res;
  }

  getSize() {
    return this.size;
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.edges = {};
  }
}

export default DirectedGraph;