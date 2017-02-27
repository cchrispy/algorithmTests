import { expect } from 'chai';
import castleOnAGrid from '../src/castleOnAGrid';

xdescribe('Castle On A Grid', () => {

  it('Should be a function', () => {
    expect(castleOnAGrid).to.be.a('function');
  })

  describe('Test Cases', () => {

    it('Case 1', () => {
      var grid = [
       [1, 0, 1],
       [1, 0, 1],
       [1, 1, 1],
      ];
      expect(castleOnAGrid(grid, [0, 0], [0, 2])).to.equal(3);
    })

  })

})