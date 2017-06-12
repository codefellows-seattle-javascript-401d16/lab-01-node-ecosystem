'use strict';

module.exports = greet;

const greet = (name) => {
  if (typeof(name) === 'string') {
    console.log('Hello', name);
  }else{
    return null;
  }
};
