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
    this._size = 1;
  }

  insert(n) {
    if (this._size === 1) {
      this._storage[1] = n;
    } else {
      this._storage[this._size] = n;
      this.bubbleUp(this._size);
    }
    this._size++;
  }

  extractMin() {
    if (this._size === 1) {
      return null;
    }
    if (this._size === 2) {
      this._size--;
      return this._storage.pop();
    }
    var minimum = this._storage[1];
    this._storage[1] = this._storage.pop();
    this._size--;
    this.sinkDown(1);
    return minimum;
  }

  bubbleUp(index) {
    if (index === 1) {
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
    if (index >= this._size) {
      return index;
    }
    var left  = 2 * index;
    var right = 2 * index + 1;
    var smaller = this._storage[left] <= this._storage[right] ? left  : right;
    var larger  = this._storage[left] <= this._storage[right] ? right : left;
    if (this._storage[smaller] !== undefined && 
        this._storage[index] > this._storage[smaller]) {
      var temp = this._storage[index];
      this._storage[index] = this._storage[smaller];
      this._storage[smaller] = temp;
      return this.sinkDown(smaller);
    } else if (this._storage[larger] !== undefined && 
               this._storage[index] > this._storage[larger]) {
      var temp = this._storage[index];
      this._storage[index] = this._storage[larger];
      this._storage[larger] = temp;
      return this.sinkDown(larger);
    }
    return index;
  }

}

export default MinHeap;