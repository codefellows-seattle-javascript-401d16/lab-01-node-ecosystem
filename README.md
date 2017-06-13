## Lab - 1 Project Description

The libraries are arithmetic.js and greet.js. greet.js takes a string and returns the string 'Hello, #variable'. If a string is not given to greet.js, null is returned. It is tested in greet-test.js using expect and mocha. mocha is installed globally, but I thought it would be nice to include it in the package.json as well in case another developer does not have it installed.

arithmetic.js has two properties add and subtract attached to both arithmetic and the module.exports. module.exports enables the require function to be used. Add adds two values and subtract takes the difference of two values. They both return 'Please use a number' when a non number is presented.

I made an index.js in an effort to get that one extra point and call the modules. I decided to let that one extra point go and left index.js in.
