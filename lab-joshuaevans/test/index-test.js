'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');
const arithmetic = require('../lib/arithmetic.js');

describe('testing index', () => {
  it('should return true', () => {
    expect(greet('Josh')).toEqual('Hello, Josh');
    expect(arithmetic.add(1,2)).toEqual(3);
    expect(arithmetic.sub(3,2)).toEqual(1);
  });
});
