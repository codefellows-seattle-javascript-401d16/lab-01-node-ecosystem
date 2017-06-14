'use strict';

const expect = require('expect');
const index = require('../index.js');

describe('index', () => {
  describe('output', () => {
    it('should return Hello, Fortunato, null, 6, null, -2, null', () => {
      let result = index();
      expect(result).toEqual('Hello, Fortunato, null, 6, null, -2, null');
    });
  });
});
