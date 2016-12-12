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
  })

});