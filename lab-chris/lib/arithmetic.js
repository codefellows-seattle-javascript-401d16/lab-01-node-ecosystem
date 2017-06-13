'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if(typeof a === 'number' || typeof b === 'number'){
    return a + b;
  } else {
    return 'Those are not numbers';
  }
};

arithmetic.sub = (a, b) => {
  if(typeof a === 'number' || typeof b === 'number'){
    return a - b;
  } else {
    return 'Those are not numbers';
  }
};
