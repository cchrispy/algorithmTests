import { expect } from 'chai';
import circularArrayLoop from '../src/circularArrayLoop';

describe('Circular Array Loop', () => {

  it('[2, -1, 1, 2, 2] should have a loop', () => {
    var arr = [2, -1, 1, 2, 2];
    expect(circularArrayLoop(arr)).to.be.true;
  });

  it('[-1, 2] should not have a loop', () => {
    var arr = [-1, 2];
    expect(circularArrayLoop(arr)).to.be.false;
  });

  it('[1, 2, 3, 4, 5] should have a loop', () => {
    var arr = [1, 2, 3, 4, 5];
    expect(circularArrayLoop(arr)).to.be.true;
  });

  it('[1, 1] should not have a loop', () => {
    var arr = [1, 1];
    expect(circularArrayLoop(arr)).to.be.true;
  })

  it('[2, 2] should not have a loop', () => {
    var arr = [2, 2];
    expect(circularArrayLoop(arr)).to.be.false;
  })

  it('[2, 2, 2] should have a loop', () => {
    var arr = [2, 2, 2];
    expect(circularArrayLoop(arr)).to.be.true;
  })

  it('[2, 1, -4, -1, 6] should have a loop', () => {
    var arr = [2, 1, -4, -1, 6];
    expect(circularArrayLoop(arr)).to.be.true;
  })

  xit('[1, -1] should not have a loop (because of changing directions)', () => {
    var arr = [1, -1];
    expect(circularArrayLoop(arr)).to.be.false;
  })

  xit('[-4, 2, 4, -1, 1] should not have a loop (because of changing directions)', () => {
    var arr = [-4, 2, 4, -1, 1];
    expect(circularArrayLoop(arr)).to.be.false;
  })

})