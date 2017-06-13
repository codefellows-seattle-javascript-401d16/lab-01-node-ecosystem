'use strict';


const greet = module.exports = (name) => {

  if (typeof name !== 'string'){
    return null;
  } else{
    return `hello ${name}`;
  }

};
