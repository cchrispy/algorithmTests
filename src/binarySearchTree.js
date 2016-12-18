// Implement a binary search tree

class binarySearchTree {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }

  insert(x) {

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
  }

  delete(x) {

  }

  lookup(x) {

  }

}