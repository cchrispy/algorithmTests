import { expect } from 'chai';
import permutationsString from '../src/permutationsString';

describe('Permutations String', () => {

  it('Should be a function', () => {
    expect(permutationsString).to.be.a('function');
  });

  describe('Test Cases', () => {

    it('Case 1: "abc"', () => {
      var res = [
        'abc', 'acb', 'bac', 'bca', 'cab', 'cba'
      ]
      expect(permutationsString('abc')).to.have.members(res);
    })

    it('Case 2: "abcd"', () => {
      expect(permutationsString('abcd')).to.have.lengthOf(24);
    })

    it('Case 3: "a"', () => {
      expect(permutationsString('a')).to.have.members(['a']).and.have.lengthOf(1);
    })
    
    it('Case 4: "ab"', () => {
      expect(permutationsString('ab')).to.have.members(['ab', 'ba']).and.have.lengthOf(2);
    })
  })
})