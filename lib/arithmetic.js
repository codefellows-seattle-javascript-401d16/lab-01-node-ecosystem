'use strict';


const arithmetic = result => isNaN(result) ? NaN : result;

exports.add = (a,b) => arithmetic(a + b);
exports.sub = (a,b) => arithmetic(a - b);
