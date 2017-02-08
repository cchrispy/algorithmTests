import { expect } from 'chai';
import steadyString from '../src/steadyString';

var test = (input, target) => {
  it(`${ input } should return ${ target }`, () => {
    expect(steadyString(input)).to.equal(target);
  })
}

describe('Steady String', () => {

  it('Should be a function', () => {
    expect(steadyString).to.be.a('function');
  });

  describe('Test Cases', () => {

    test('ACTG', 0);

    test('AAATAAAA', 6);

    test('ACTGGTCA', 0);

    test('AAAAAAAA', 6);

    test('AAACCAAA', 6);

    test('AACCAAAA', 4);

  })

})
