// Implement a binary search tree

class binarySearchTree {
  constructor(x) {
    this.val = x !== undefined ? x : null;
    this.left = null;
    this.right = null;
  }

  insert(x) {

    if (x === undefined) { return false; }

    if (this.val === null) { // Only for if the BST was instantiated without a value (null root value)
      this.val = x;
      return true;
    }

    if (x <= this.val) {
      if (this.left === null) {
        this.left = new binarySearchTree(x);
      } else {
        this.left.insert(x);
      }
    } else {
      if (this.right === null) {
        this.right = new binarySearchTree(x);
      } else {
        this.right.insert(x);
      }
    }

    return true;
  }

  delete(x) {



  }

  lookup(x) {
    // Depth first search

    if (this.val === x) { return true; }

    if (x <= this.val) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.lookup(x);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.lookup(x);
      }
    }

  }

  getMin() {
    if (this.left === null) {
      return this.val;
    }
    return this.left.getMin();
  }

  getMax() {
    if (this.right === null) {
      return this.val;
    }
    return this.right.getMax();
  }

  deleteMin() {
    if (this.left === null) { // if the root is the min, adjust the new root
      var min = this.val;

      if (this.right) {
        this.val = this.right.val;
        this.left = this.right.left;
        this.right = this.right.right;
      } else {
        this.val = null;
      }

      return min;
    }

    if (this.left.left === null) {
      var min = this.left.val;
      this.left = this.left.right;
      return min;
    } else {
      return this.left.deleteMin();
    }
  }

  deleteMax() {
    if (this.right === null) { // if the root is the max
      var max = this.val;

      if (this.left) {
        this.val = this.left.val;
        this.right = this.left.right;
        this.left = this.left.left;
      } else {
        this.val = null;
      }

      return max;
    }

    if (this.right.right === null) {
      var max = this.right.val;
      this.right = this.right.left;
      return max;
    } else {
      return this.right.deleteMax();
    }
  }

}

export default binarySearchTree;