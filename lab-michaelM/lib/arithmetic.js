'use-strict';

const arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Please enter numeric values.';
  } else {
    return  a+b;
  }
};

arithmetic.sub = (a,b) => {if(isNaN(a) || isNaN(b)) {
  return 'Please enter numeric values.';
} else {
  return a-b;
}
};
