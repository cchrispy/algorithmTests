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

    it('Case 3: aa', () => {
      expect(prefixMaxProduct('aa')).to.equal(2);
    });

    it('Case 4: abcd', () => {
      expect(prefixMaxProduct('abcd')).to.equal(4);
    })

    it('Case 5: abcdefabcd', () => {
      expect(prefixMaxProduct('abcdeabcd')).to.equal(9);
    })

    it('Case 6: abcabcabca', () => {
      expect(prefixMaxProduct('abcabcabca')).to.equal(14);
    })

  })

})