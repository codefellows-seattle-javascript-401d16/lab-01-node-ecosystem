'use strict';

module.exports = function(name){
  if (typeof name === 'string' || name instanceof String){
    return ('Hello', name);
  }else{
    return null;
  }
};
