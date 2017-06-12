'use strict';

const arithmetic = module.exports = {};

//function to add two numbers passed as parameters
arithmetic.add = (a, b) => {
  (isNaN(a) || isNaN(b) ? console.log('Please enter a valid Number') : console.log('Your result is ', a + b));
};

//function to substract the  two number passed as parameters
arithmetic.sub = (a, b) => {
  (isNaN(a) || isNaN(b) ? console.log('Please enter a valid Number') : console.log('Your result is ', a - b));
};
