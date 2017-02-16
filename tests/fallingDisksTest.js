import { expect } from 'chai';
import fallingDisks from '../src/fallingDisks';

describe('Falling Disks', () => {
  it('Should be a function', () => {
    expect(fallingDisks).to.be.a('function');
  })

  describe('Test Cases', () => {
    it('Case 1', () => {

      var well = [5, 6, 4, 3, 6, 2, 3];
      var disks = [2, 3, 5, 2, 4];
      expect(fallingDisks(well, disks)).to.equal(4);

    });

    xit('Case 2', () => {

      var well = [1, 2, 3];
      var disks = [1, 1, 1];

      expect(fallingDisks(well, disks)).to.equal(3);

    })

    it('Case 3', () => {

      var well = [3, 2, 1];
      var disks = [3, 2, 1];

      expect(fallingDisks(well, disks)).to.equal(1);

    });

    it('Case 4', () => {
      var well = [5, 4, 3, 2, 1];
      var disks = [1, 4, 2, 3, 1];

      expect(fallingDisks(well, disks)).to.equal(3);
    });

    it('Case 5', () => {
      var well = [1, 5, 5, 5, 5];
      var disks = [2, 1, 1, 1, 1];

      expect(fallingDisks(well, disks)).to.equal(0);
    })

    it('Case 6', () => {
      var well = [1, 5, 5, 5, 5];
      var disks = [1, 2, 1, 1, 1];

      expect(fallingDisks(well, disks)).to.equal(1);
    })

    it('Case 7', () => {
      var well = [1, 5, 5, 5, 5];
      var disks = [1, 1, 2, 1, 1, 1];

      expect(fallingDisks(well, disks)).to.equal(2);
    })


  })
})