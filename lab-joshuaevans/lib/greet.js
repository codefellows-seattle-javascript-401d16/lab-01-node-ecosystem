'use strict';

module.exports = function(name){
  if(typeof(name) !== 'string'){
    return null;
  } else {
    return 'Hello, ' +  name;
  }
};
