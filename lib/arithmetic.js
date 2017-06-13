'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (num1, num2) => (isNaN(num1) || isNaN(num2)) ? 'Please enter a valid integer.' : num1 + num2;

arithmetic.sub = (num1, num2) => (isNaN(num1) || isNaN(num2)) ? 'Please enter a valid integer.' : num1 - num2;
