'use strict';

describe ('testing greet', () => {
  describe ('hello', () => {
    it ('should return "Hello world"', () => {
      let result = greet('world');
      expect(result).toEqual('Hello world');
    })
  })
})
