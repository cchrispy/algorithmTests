import { expect } from 'chai';
import islandCount from '../src/islandCount';

describe('islandCount', () => {
  var matrix;
  beforeEach(() => {
    matrix = [
      [0, 1, 0, 1, 0],
      [0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1]
    ];
  });

  it('Should be a funtion', () => {
    expect(islandCount).to.be.a('function');
  });

  it('Should return null if no arguments are provided', () => {
    expect(islandCount()).to.be.null;
  });

  it('Should handle an empty array', () => {
    expect(islandCount([])).to.be.null;
  })

  it('Should return 0 for an empty matrix', () => {
    expect(islandCount([[]])).to.equal(0);
  });

  it('Should return a number', () => {
    expect(islandCount(matrix)).to.be.a('number');
  })

  describe('Test cases', () => {
    var matrix_1 = [
      [0, 1, 0, 1, 0],
      [0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1]
    ];

    var matrix_2 = [
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 0, 1]
    ];

    var matrix_3 = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1]
    ];

    var matrix_4 = [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ];

    var matrix_5 = [
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1]
    ];

    var matrix_6 = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ];

    it('Case 1', () => {
      expect(islandCount(matrix_1)).to.equal(6);
    })

    it('Case 2', () => {
      expect(islandCount(matrix_2)).to.equal(10);
    });

    it('Case 3', () => {
      expect(islandCount(matrix_3)).to.equal(1);
    })

    it('Case 4', () => {
      expect(islandCount(matrix_4)).to.equal(4);
    });

    it('Case 5', () => {
      expect(islandCount(matrix_5)).to.equal(1);
    });

    it('Case 6', () => {
      expect(islandCount(matrix_6)).to.equal(2);
    });

  });

});