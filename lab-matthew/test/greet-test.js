'use strict';

const expect = require('expect');

const greet = require('../lib/greet.js');

describe('testing greet', () => {
  it('should return Hello, world!', () => {
    let result = greet('world!');
    expect(result).toEqual('Hello, world!');
  });
});
