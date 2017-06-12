'use strict';

describe ('arithmetic functions', function (){
  describe ('add method', function() {
    it ('should return 4', function() {
      let addTest = arithmetic.add(2, 2);
      expect(addTest).toEqual(4);
    });
  });
  describe ('subtract method', function(){
    it ('should return 1', function(){
      let subtractTest = arithmetic.subtract(5, 1);
      expect(subtractTest).toEqual(1);
    });
  });
});
