import { expect } from 'chai';
import findADupe from '../src/findADupe';

describe('Find a Dupe', () => {

  it('Should be a function', () => {
    expect(findADupe).to.be.a('function');
  });

  it('Should return null for invalid arguments', () => {
    expect(findADupe()).to.be.null;
    expect(findADupe('Hello')).to.be.null;
    expect(findADupe(420)).to.be.null;
    expect(findADupe({ a: 1 })).to.be.null;
    expect(findADupe(true)).to.be.null;
    expect(findADupe([])).to.be.null;
  });

  it('Should return a number', () => {
    expect(findADupe([1, 1, 1])).to.be.a('number');
  });

  it('Should not mutate the original array', () => {
    var array = [1, 5, 2, 3, 7, 2, 1, 1];
    findADupe(array);
    expect(array).to.eql([1, 5, 2, 3, 7, 2, 1, 1]);
  });

  describe('Test cases', () => {

    it('Case 1', () => {
      expect(findADupe([4, 1, 5, 2, 1, 2])).to.be.oneOf([1, 2]);
    });

    it('Case 2', () => {
      expect(findADupe([1, 1, 2, 3, 4])).to.equal(1);
    });

    it('Case 3', () => {
      expect(findADupe([1, 2, 3, 4, 4])).to.equal(4);
    });

    it('Case 4', () => {
      expect(findADupe([1, 2, 3, 4, 1])).to.equal(1);
    });

    it('Case 5', () => {
      expect(findADupe([1, 2, 3, 3, 4])).to.equal(3);
    });

    it('Case 6', () => {
      var arr = [5, 2, 3, 3, 5, 1];
      expect(findADupe(arr)).to.be.oneOf([3, 5]);
      expect(arr).to.eql([5, 2, 3, 3, 5, 1]);
    });

    it('Case 7', () => {
      expect(findADupe([3, 4, 1, 5, 2, 4])).to.equal(4);
    });

    it('Case 8', () => {
      expect(findADupe([4, 4, 4, 1, 1, 1])).to.be.oneOf([1, 4]);
    });

    it('Case 9', () => {
      expect(findADupe([1, 1])).to.equal(1);
    });

    it('Case 10', () => {
      expect(findADupe([5, 5, 5, 5, 5, 5])).to.equal(5);
    });

    it('Case 11', () => {
      expect(findADupe([4, 4, 4, 4, 4, 4])).to.equal(4);
    });

    it('Case 12', () => {
      expect(findADupe([3, 3, 3, 3, 3, 3])).to.equal(3);
    });

    it('Case 13', () => {
      expect(findADupe([2, 2, 2, 2, 2, 2])).to.equal(2);
    });

    it('Case 14', () => {
      expect(findADupe([1, 1, 1, 1, 1, 1])).to.equal(1);
    });

  })

})