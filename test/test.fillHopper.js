import { equal } from 'assert';
import { getBallz } from '../fillHopper.js';

console.log(getBallz);

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      equal([1, 2, 3].indexOf(4), -1);
    });
  });
});