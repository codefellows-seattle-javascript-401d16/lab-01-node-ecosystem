'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if (typeof a === 'number' || typeof b === 'number') {
    return a + b;
  } else {
    return 'The entry is not a number.';
  }
};

arithmetic.subtract = (a, b) => {
  if (typeof a === 'number' || typeof b === 'number') {
    return a - b;
  } else {
    return 'The entry is not a number.';
  }
};
