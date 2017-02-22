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

  })

})