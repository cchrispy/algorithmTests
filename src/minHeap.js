// Implement a min-heap that supports two operations:
// insert (log n time complexity) and extractMin (constant time)
// Notes: It's a binary tree where every parent node is smaller
// than its children nodes
// Left child is at position 2i
// Right child is at position 2i + 1
// Parent node is at position i/2 (floored)

class MinHeap {
  constructor() {
    this._storage = [];
    this._size = 0;
  }

  insert(n) {
    console.log('I AM INSERTING WITH THIS SIZE: ', this._size);
    if (!this._size) {
      this._storage[0] = n;
    } else {
      this._storage[this._size] = n;
      this.bubbleUp(this._size);
    }
    this._size++;
  }

  extractMin() {
    if (!this._storage.length) {
      return null;
    }

    var val = this._storage[0];

    return val;
  }

  bubbleUp(index) {
    if (index === 0) {
      return this._storage[index];
    }
    var parent = Math.floor(index/2);
    if (this._storage[parent] > this._storage[index]) {
      var temp = this._storage[index];
      this._storage[index] = this._storage[parent];
      this._storage[parent] = temp;
      return this.bubbleUp(parent);
    } else {
      return this._storage[index];
    }
  }

  sinkDown(index) {

  }

}

export default MinHeap;