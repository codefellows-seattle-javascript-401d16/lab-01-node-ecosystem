# Lab 01 Node Ecosystem
\n  
# I created two modules in a directory called lib, and I created two tests for those modules inside a directory called test.
\n
# arithmetic.js is a module inside of lib, it assigns an empty object to module.exports and const arithmetic. Then we create add and subtract functions that do addition and subtraction and ensure the input is a number, or it returns null.
\n  
# greet.js is a module inside of lib, it defines a function module.exports which passes in an argument name and when invoked returns the input name concatenated with "Hello, ". The greet function should returns null if the input is not a string.
\n  
#arithmetic-test.js is a module inside the directory tests containing tests to test for the `add` and `subtract` methods on the arithmetic module, a test that ensures the functions work as you expect with number inputs, and a test that ensures the functions work as expected with non number inputs.
\n  
#greet-test.js is a module inside the directory tests containing tests to test that expects the greet module to return "Hello, world!" when invoked with "world!" as a parameter, and a test that expects the greet module to return null when you use non string values.
\n  
# I created index.js which defines const greet and const arithmetic and points to their location in the directory.
\n  
# I added the proper node_modules .eslintignore .eslintrc and .gitignore as well as package.json with dependencies mocha and expect.
\n  
