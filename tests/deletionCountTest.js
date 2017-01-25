import { expect } from 'chai';
import deletionCount from '../src/deletionCount';

describe('Deletion Count', () => {


  it('Should be a function', () => {
    expect(deletionCount).to.be.a('function');
  })

});