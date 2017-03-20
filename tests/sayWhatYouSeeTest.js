import { expect } from 'chai';
import sayWhatYouSee from '../src/sayWhatYouSee';

describe('Say What You See', () => {

  it('Should be a function', () => {
    expect(sayWhatYouSee).to.be.a('function');
  })

})