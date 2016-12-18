import { expect } from 'chai';
import binarySearchTree from '../src/binarySearchTree';

describe('Binary Search Tree', () => {

  var tree;
  beforeEach(() => {
    tree = new binarySearchTree();
  });

  it('Should be a class', () => {
    expect(tree).to.be.an.instanceof(binarySearchTree);
  });

  it('Should have "insert", "delete", "lookup" methods', () => {

    expect(tree.insert).to.be.a('function');
    expect(tree.delete).to.be.a('function');
    expect(tree.lookup).to.be.a('function');

  });

  xit('Should insert numbers in appropriate places', () => {

  });

  xit('Every node in the tree should be its own binarySearchTree', () => {

  });

  

})