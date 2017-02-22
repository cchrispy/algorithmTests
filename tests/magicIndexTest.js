import { expect } from 'chai';
import magicIndex from '../src/magicIndex';

describe('Magic Index', () => {

  it('Should be a function', () => {
    expect(magicIndex).to.be.a('function');
  })

  describe('Test Cases', () => {

    it('Case 1: [3, 4, 5, 6]', () => {
      expect(magicIndex([3, 4, 5, 6])).to.be.false;
    })

    it('Case 2: [-2, 0, 1, 2, 4, 5]', () => {
      expect(magicIndex([-2, 0, 1, 2, 4, 5])).to.be.oneOf([4, 5]);
    })

    it('Case 3: [0, 10, 11, 12, 13, 14]', () => {
      expect(magicIndex([0, 10, 11, 12, 13, 14])).to.equal(0);
    })

    it('Case 4: [0, 10, 15]', () => {
      expect(magicIndex([0, 10, 11, 12, 13, 14, 15])).to.equal(0);
    })

    it('Case 5: [-1, 0, 1, 2, 3, 5]', () => {
      expect(magicIndex([-1, 0, 1, 2, 3, 5])).to.equal(5);
    })

    it('Case 6: [-1, 0, 1, 2, 3, 4, 6]', () => {
      expect(magicIndex([-1, 0, 1, 2, 3, 4, 6])).to.equal(6);
    })

  })

})