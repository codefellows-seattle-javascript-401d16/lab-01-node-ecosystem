'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  return (typeof a === 'number' && typeof b === 'number') ? a + b : null;
};

arithmetic.sub = (a, b) =>{
  return (typeof a === 'number' && typeof b === 'number') ? a - b : null;
};
