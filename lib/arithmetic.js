'use strict';

const arithmetic = module.exports = () => {
  arithmetic.add = (a,b) =>  (typeof a !== 'number' && b !== 'number' ? a + b : null);
  arithmetic.sub = (a,b) => (typeof a !== 'number' && b !== 'number' ? a - b : null);
};
