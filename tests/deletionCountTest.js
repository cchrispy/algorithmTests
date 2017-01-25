import { expect } from 'chai';
import deletionCount from '../src/deletionCount';

describe('Deletion Count', () => {

  // "cat", "at" returns 1
  // "cat", "bat" returns 2
  // "boat", "got" returns 3
  // "aaaaa", "a" returns 4
  // "thought", "sloughs" returns 6
  // "abc", "cba" returns 4

  it('Should be a function', () => {
    expect(deletionCount).to.be.a('function');
  })

  describe('Test cases', () => {
    it('cat, at', () => {
      expect(deletionCount('cat', 'at')).to.equal(1);
    })

    it('cat, bat', () => {
      expect(deletionCount('cat', 'bat')).to.equal(2);
    })

    it('boat, goat', () => {
      expect(deletionCount('boat', 'got')).to.equal(3);
    })

    it('aaaaa, a', () => {
      expect(deletionCount('aaaaa', 'a')).to.equal(4);
    })

    it('thought, sloughs', () => {
      expect(deletionCount('thought', 'sloughs')).to.equal(6);
    })

    it('abc, cba', () => {
      expect(deletionCount('abc', 'cba')).to.equal(4);
    })
  })

});