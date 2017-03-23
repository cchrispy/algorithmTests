import { expect } from 'chai';
import sayWhatYouSee from '../src/sayWhatYouSee';

describe('Say What You See', () => {

  it('Should be a function', () => {
    expect(sayWhatYouSee).to.be.a('function');
  });

  describe('Test cases', () => {

    it('Case 1: ["12", "21"]', () => {
      var solution = sayWhatYouSee(["12", "21"]);
      expect(solution).to.have.members(['1112', '1211']);
    })

    it('Case 2: ["1112", "1133"]', () => {
      var solution = sayWhatYouSee(["1112", "1133"]);
      expect(solution).to.have.members(['3112', '2123']);
    })

    it('Case 3: ["11114", "123"]', () => {
      var solution = sayWhatYouSee(["11114", "123"]);
      expect(solution).to.have.members(['4114', '111213']);
    })

    it('Case 4: ["555334"]', () => {
      var solution = sayWhatYouSee(["555334"]);
      expect(solution).to.have.members(['352314']);
    })

    it('Case 5: ["112233", "1", "998"]', () => {
      var solution = sayWhatYouSee(["112233", "1", "998"]);
      expect(solution).to.have.members(['212223', '11', '2918']);
    })

  })

})