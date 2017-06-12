'use strict';

describe ('testing arithmetic', () => {
  describe ('testing add', () => {
    it ('should return 4', () => {
      let result = arithmetic.add(2, 2);
      expect(result).toEqual(4);
    });
    it ('should return 4', () => {
      let result = arithmetic.add('hello', 2);
      expect(result).toEqual('hello2');
    });
  });
  describe ('testing subtract', () => {
    it ('should return 2', () => {
      let result = arithmetic.subtract(4, 2);
      expect(result).toEqual(2);
    });
  });
});
