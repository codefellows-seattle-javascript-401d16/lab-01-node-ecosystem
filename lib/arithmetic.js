'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => a + b;
arithmetic.sub = (a, b) => a - b;

if (Number.isInteger(NaN)) {
  console.log('Please input numbers');
}
