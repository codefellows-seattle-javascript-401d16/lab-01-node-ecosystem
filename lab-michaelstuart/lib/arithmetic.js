'use strict';

const resultChecker = result => isNaN(result) ? 'not a number' : result;

exports.add = (a, b) => resultChecker(a + b);

exports.sub = (a, b) => resultChecker(a - b);
