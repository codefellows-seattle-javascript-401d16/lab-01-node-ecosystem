#Project Description  

This project uses Node.js, with index.js as the main module in package.json. The dependency is expect.js. I installed Mocha globally as the test package and use expact.js to run the tests.  

In the lib package I use arithmetic.js and greet.js as my libraries.  
arithmetic.js includes two functions, each take in two parameters which are expected to be numbers. if they give an argument that is not a number they will return NaN. arithmetic.add adds the two numbers and arthimetic.sub subtracts the two numbers.  
greet.js is one function that takes in the parameter "name" and returns a concatenated string of "Hello, " + name. If name is not a string, it will return null.
