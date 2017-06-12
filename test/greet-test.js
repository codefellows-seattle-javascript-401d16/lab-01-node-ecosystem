'use strict';

describe ('greet', function (){
  it ('should return Hello User', function() {
    let greetTest = greet('User');
    expect(greetTest).toEqual('Hello User');
  });
});
