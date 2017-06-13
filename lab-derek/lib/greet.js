'use strict';

module.exports = (name) => {
  if (typeof(name) === 'string') {
    console.log('Hello', name);
    return 'Hello ' + name;
  }else{
    return null;
  }
};
