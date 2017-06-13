'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('test greet', () => {
  it('should return Hello, world!', () => {
    let result = greet('world!');
    expect(result).toEqual('Hello, world!');
  });
  it('should return null', () => {
    let result = greet(6);
    expect(result).toEqual(null);
  });
});
