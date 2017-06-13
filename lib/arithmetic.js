'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => areNumeric(a, b) ? a + b : null;
arithmetic.sub = (a, b) => areNumeric(a, b) ? a - b : null;

const areNumeric = (a, b) => (typeof a === 'number' && typeof b === 'number');
