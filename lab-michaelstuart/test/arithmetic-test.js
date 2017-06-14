'use strict';

const expect = require('expect');
const { add, sub } = require('../lib/arithmetic');

describe('testing add', () => {
  it('should return 4', () => {
    expect(add(2, 2)).toEqual(4);
  });

  it('it should return not a number', () => {
    expect(add('a', 'b')).toBe('not a number');
  });
});

describe('testing sub', () => {
  it('should return 0', () => {
    expect(sub(2, 2)).toEqual(0);
  });

  it('it should return not a number', () => {
    expect(sub('a', 'b')).toBe('not a number');
  });
});
