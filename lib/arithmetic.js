'use strict';

const funWithMath = module.exports = {};

funWithMath.add = (a, b) => {
  if(Number.isInteger(a) && Number.isInteger(a)) {
    return a + b;
  } else {
    return 'That is not a number!';
  }
};
funWithMath.sub = (a, b) => {
  if(Number.isInteger(a) && Number.isInteger(a)) {
    return a - b;
  } else {
    return 'That is not a number!';
  }
};
