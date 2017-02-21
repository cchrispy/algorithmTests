import { expect } from 'chai';
import maxBalancedBinarySubarray from '../src/maxBalancedBinarySubarray';

describe('Max Balanced Binary Subarray', () => {

  it('Should be a function', () => {
    expect(maxBalancedBinarySubarray).to.be.a('function');
  })

  describe('Test cases', () => {

    it('Case 1: [1, 1, 1, 0, 1, 0, 0, 1]', () => {
      expect(maxBalancedBinarySubarray([1, 1, 1, 0, 1, 0, 0, 1])).to.equal(6);
    })

    it('Case 2: [0, 1, 1, 1, 1, 0, 0, 1]', () => {
      expect(maxBalancedBinarySubarray([0, 1, 1, 1, 1, 0, 0, 1])).to.equal(4);
    })

    it('Case 3: [0, 1, 1, 1, 0]', () => {
      expect(maxBalancedBinarySubarray([0, 1, 1, 1, 0])).to.equal(2);
    })

  })

})