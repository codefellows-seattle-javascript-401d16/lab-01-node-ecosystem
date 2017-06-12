'use strict';

const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing module arithmetic.js', function() {
  it('should return a number', function () {
    expect(arithmetic.add(1,2)).to.equal(3);
    expect(arithmetic.add(3,4)).to.equal(7);
  });
  it('should return an error', function() {
    expect(arithmetic.add('', 4)).to.equal('Enter a number');
  });
  it('should return a number', function () {
    expect(arithmetic.subtract(4,3)).to.equal(1);
    expect(arithmetic.subtract(2,1)).to.equal(1);
  });
  it('should return an error', function() {
    expect(arithmetic.subtract('', 4)).to.equal('Enter a number');
    expect(arithmetic.subtract('', 2)).to.equal('Enter a number');
  });
});
