import { expect } from 'chai';
import perimeter from '../src/perimeterOfShapes';

describe('Perimeter of Shapes', () => {

  it('Should be a function', () => {
    expect(perimeter).to.be.a('function');
  })

  describe('Test Cases', () => {

    it('Case 1', () => {
    
      var matrix = [
       [0, 0, 0, 0, 0],
       [0, 1, 1, 0, 0],
       [0, 1, 1, 1, 0],
       [0, 0, 1, 1, 0],
       [0, 0, 1, 0, 0],
       [0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0]
      ];

      expect(perimeter(matrix)).to.equal(14);

    });

    it('Case 2', () => {
      var matrix = [
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      expect(perimeter(matrix)).to.equal(4);
    })

    it('Case 3', () => {
      var matrix = [
        [0, 1, 0, 0],
        [0, 1, 1, 1],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      expect(perimeter(matrix)).to.equal(12);
    });

    it('Case 4', () => {
      var matrix = [
        [0, 1, 0, 0],
        [0, 1, 1, 1],
        [0, 1, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 0],
      ];

      expect(perimeter(matrix)).to.equal(16);
    });

    it('Case 5', () => {
      var matrix = [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
      ];

      expect(perimeter(matrix)).to.equal(28);

    });

    it('Case 6', () => {
      var matrix = [
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
      ];

      expect(perimeter(matrix)).to.equal(32);

    });

  });
})