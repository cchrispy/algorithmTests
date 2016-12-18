// Implement a binary search tree

class binarySearchTree {
  constructor(x) {
    this.val = x || null;
    this.left = null;
    this.right = null;
  }

  insert(x) {

    if (this.val === null) {
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

  }

}

export default binarySearchTree;