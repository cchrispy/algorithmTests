import { expect } from 'chai';
import maxSubarray from '../src/maxSubarray';

describe('Max Subarray', () => {

  it('Should be a function', () => {
    expect(maxSubarray).to.be.a('function');
  })

  describe('Test Cases', () => {

    test([-3, 5, -2, 3, 4, -2, 3], 11);

    test([-3, 5, -2, 3, -4, 4, -2, 3], 7);

    test([1, 1, 5, 2, -2, -2], 9);

    test([-2, 1, 1, 5, 2, -2, -2], 9);

    test([1, 1, 1, -1, 1, -2, 1, 2, 1], 5);

    test([5, -4, 3], 5);

    test([3, -4, 5], 5);

    test([5, -1, -1, 3], 6);

    test([3, -2, 4, -3, 1, -5, 6, 1, -1, 2], 8);

    test([3, -2, 4, -3, 1, -5, 2, 1, -1, 2], 5);

  })
  
})

function test(arr, expected) {

  it(`[${ arr }] should return ${ expected }`, () => {
    expect(maxSubarray(arr)).to.equal(expected);
  })

}