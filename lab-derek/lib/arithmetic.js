'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if (typeof(a) === 'number' && typeof(b) === 'number'){
    return a + b;
  }else{
    console.error('input is not a number');
    return null;
  }
};

arithmetic.subtract = (a, b) => {
  if (typeof(a) === 'number' && typeof(b) === 'number'){
    return a - b;
  }else{
    console.error('input is not a number');
    return null;
  }
};
