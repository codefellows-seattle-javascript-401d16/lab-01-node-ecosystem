'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function (num1, num2) {
  if (typeof(num1) == 'number' && typeof(num2) == 'number') {
    return num1 + num2;
  }
};

arithmetic.sub = function (num1, num2) {
  if (typeof(num1) == 'number' && typeof(num2) == 'number') {
    return  num1 - num2;
  } else {
    return 'Not a valid number assignment.';
  }
};
