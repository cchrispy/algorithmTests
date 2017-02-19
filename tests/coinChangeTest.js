import { expect } from 'chai';
import coinChange from '../src/coinChange';

describe('Coin Change', () => {

  it('Should be a function', () => {
    expect(coinChange).to.be.a('function');
  })

})