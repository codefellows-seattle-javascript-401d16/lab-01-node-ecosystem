'use strict';

const expect = require('expect');
const index = require('../index.js');

describe('index', () => {
  describe('output', () => {
    it('should return Hello, Spencer, null, 7, null, -1, null', () => {
      let result = index();
      expect(result).toEqual('Hello, Spencer, null, 7, null, -1, null');
    });
  });
});
