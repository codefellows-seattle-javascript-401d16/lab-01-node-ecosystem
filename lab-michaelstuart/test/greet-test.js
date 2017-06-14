'use strict';

const expect = require('expect');
const greet = require('../lib/greet');

describe('testing greet', () => {
  it('should return Hello, world!', () => {
    expect(greet('world!')).toEqual('Hello, world!');
  });

  it('it should return null', () => {
    expect(greet()).toBe(null);
    expect(greet([])).toBe(null);
  });
});
