'use strict';

// Create a nodejs module named arithmetic
// The arithmetic.js module should have add and sub methods
// add should have to params that should expect a number, it should return the sum of the to numbers
// sub should have to params that should expect a number, it should return the first argument minus the second argument
// decide on an expected behavior for non number inputs

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if(typeof a ==='number' && typeof b === 'number') {
    return a + b;
  } else {
    return null;
  }
};

arithmetic.subtract = (a, b) => {
  if(typeof a === 'number' && typeof b === 'number') {
    return a-b;
  } else {
    return null;
  }
};
