'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing module arithmetic.js', function() {
  it('this should return a number', function () {
    expect(arithmetic.add(1,2)).toEqual(3);
    expect(arithmetic.add(3,4)).toEqual(7);
  });
  it('this should return an error', function() {
    expect(arithmetic.add('', 4)).toEqual(null);
  });
  it('this should return a number', function () {
    expect(arithmetic.subtract(4,3)).toEqual(1);
    expect(arithmetic.subtract(2,1)).toEqual(1);
  });
  it('this should return an error', function() {
    expect(arithmetic.subtract('', 4)).toEqual(null);
    expect(arithmetic.subtract('', 2)).toEqual(null);
  });
});
