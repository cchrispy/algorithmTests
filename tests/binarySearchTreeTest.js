import { expect } from 'chai';
import binarySearchTree from '../src/binarySearchTree';

describe('Binary Search Tree', () => {

  var tree;
  beforeEach(() => {
    tree = new binarySearchTree();
  });

  const insert = (bst, arr) => arr.forEach(x => bst.insert(x));

  it('Should be a class', () => {
    expect(tree).to.be.an.instanceof(binarySearchTree);
  });

  it('Should have "insert", "delete", "lookup", "getMin", "getMax", "deleteMin", "deleteMax" methods', () => {

    expect(tree.insert).to.be.a('function');
    expect(tree.delete).to.be.a('function');
    expect(tree.lookup).to.be.a('function');
    expect(tree.getMin).to.be.a('function');
    expect(tree.getMax).to.be.a('function');
    expect(tree.deleteMin).to.be.a('function');
    expect(tree.deleteMax).to.be.a('function');

  });

  it('Every node in the tree should be its own binarySearchTree', () => {
    var values = [5, 2, 4, 9, 10, 14, 1, 3, 6];
    insert(tree, values);

    expect(tree.left).to.be.an.instanceof(binarySearchTree);
    expect(tree.left.right).to.be.an.instanceof(binarySearchTree);
    expect(tree.right).to.be.an.instanceof(binarySearchTree);
    expect(tree.right.right).to.be.an.instanceof(binarySearchTree);
    expect(tree.right.left).to.be.an.instanceof(binarySearchTree);
  });

  it('Should be able to get min and max values', () => {
    var values = [5, 2, 4, 9, 10, 14, 1, 3, 6];
    insert(tree, values);

    expect(tree.getMin()).to.equal(1);
    expect(tree.getMax()).to.equal(14);

    insert(tree, [0]);

    expect(tree.getMin()).to.equal(0);

  });

  describe('deleteMin and deleteMax methods', () => {

    var tree_1;
    beforeEach(() => {
      tree_1 = new binarySearchTree();
    })

    it('Normal case', () => {
      var values = [5, 2, 4, 9, 10, 14, 1, 3, 6];
      insert(tree_1, values);

      tree_1.deleteMin();
      tree_1.deleteMax();

      expect(tree_1.getMin()).to.equal(2);
      expect(tree_1.getMax()).to.equal(10);

      tree_1.deleteMax();

      expect(tree_1.getMax()).to.equal(9);

    });

    it('If the root is the min', () => {
      var values = [1, 4, 5, 6, 2, 3];
      insert(tree_1, values);

      expect(tree_1.getMin()).to.equal(1);
      expect(tree_1.getMax()).to.equal(6);

      tree_1.deleteMin();

      expect(tree_1.getMin()).to.equal(2);
      expect(tree_1.getMax()).to.equal(6);

      tree_1.deleteMax();

      expect(tree_1.getMax()).to.equal(5);

    });

    it('If the root is the max', () => {
      var values = [10, 9, 2, 4, 7, 8, 1];
      insert(tree_1, values);

      expect(tree_1.getMin()).to.equal(1);
      expect(tree_1.getMax()).to.equal(10);

      tree_1.deleteMin();
      tree_1.deleteMax();

      expect(tree_1.getMin()).to.equal(2);
      expect(tree_1.getMax()).to.equal(9);

      tree_1.deleteMax();

      expect(tree_1.getMax()).to.equal(8);
      expect(tree_1.getMin()).to.equal(2);

    })
    
  })



})