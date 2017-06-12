'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('testing hello world', () => {
  it('should return Hello, world!', () => {
    expect(greet('world!')).toEqual('Hello, world!');
  });
});

describe('testing if not string', () => {
  it('should return null', () => {
    expect(greet()).toEqual(null);
    return null;
  });
});
