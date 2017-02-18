import { expect } from 'chai';
import prefixMaxProduct from '../src/prefixMaxProduct';

describe('Prefix Max Product', () => {

  it('Should be a function', () => {
    expect(prefixMaxProduct).to.be.a('function');
  })

  describe('Test cases', () => {

    it('Case 1: abababa', () => {
      expect(prefixMaxProduct('abababa')).to.equal(10);
    })

    it('Case 2: aaa', () => {
      expect(prefixMaxProduct('aaa')).to.equal(4);
    })


  })

})