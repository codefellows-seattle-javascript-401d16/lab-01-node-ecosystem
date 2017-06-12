'use strict';

module.exports = function(name){
  if(typeof name === 'string'){
    console.log('hello', name);
  } else {
    return null;
  }
};
