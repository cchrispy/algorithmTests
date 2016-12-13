import { expect } from 'chai';
import tripletSums from '../src/tripletSums';

describe('Triplet Sums', () => {

  it('Should be a function', () => {
    expect(tripletSums).to.be.a('function');
  });

  it('Should accept an array and a number as arguments', () => {
    expect(tripletSums()).to.be.null;
    expect(tripletSums('hey', 40)).to.be.null;
    expect(tripletSums([], 40)).to.be.null;
    expect(tripletSums([1, 2, 3])).to.be.null;
    expect(tripletSums([1, 2], 0)).to.be.null;
  });

  it('Should return an array', () => {
    expect(tripletSums([10, 20, 30, 40], 30)).to.be.an('array');
  });

  it('Should not mutate the original array', () => {
    var array = [10, 20, 30, 40, 50];
    var arrayCopy = array.slice();
    tripletSums(array, 50);
    expect(array).to.deep.equal(arrayCopy);
  });

  describe('Test cases', () => {

    it('tripletSums([10, 20, 30, 40, 50], 50)', () => {

      var results = tripletSums([50, 20, 30, 40, 10], 90);
      var answers = [[10, 40, 50], 
                     [20, 30, 40], 
                     [20, 40, 50], 
                     [30, 40, 50]];
      answers.forEach(answer => {
        expect(results).to.deep.include.members([answer]);
      });

    });

  });


});