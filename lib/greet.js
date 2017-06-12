'use strict';

let greet = (name) => {
  if (typeof(name) === 'string') {
    console.log('Hello', name);
  }else{
    return null;
  }
};
