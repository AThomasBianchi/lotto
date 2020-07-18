import { equal } from 'assert';
import fillHopper from '../fillHopper.js';
import { testLeague } from '../ballData.js';

describe('fillHopeer', () => {
  it('should return list of length 10', () => {
    equal(fillHopper(testLeague).length, 10);
  });
  it('should return list with 5 toms', () => {
    equal(fillHopper(testLeague).filter(ball => ball === 'tom').length, 5);
  });
});

