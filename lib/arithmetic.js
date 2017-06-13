'use strict';

var arithmetic = module.exports = {};

arithmetic.add = (a,b) => (typeof a === 'number' && typeof b === 'number') ? a + b : NaN;
arithmetic.sub = (a,b) => (typeof a === 'number' && typeof b === 'number') ? a - b : NaN;
