##Lab 01

Creates a package to allow a user to add and subtract basic arithmetic operations and also allows the user to greet.

####Prerequisites -

Install packages using **npm install** in your terminal.

node.js
mocha
expect

####Running a  Test Module -

Run a test module in your terminal using the **npm test** command.

When running the test modules for *greet* and *arithmetic*, you should see a return message similar to below:

```
  testing module arithmetic.js
    ✓ this should return a number
    ✓ this should return an error
    ✓ this should return a number
    ✓ this should return an error
```
```
  testing module greet.js
    ✓ this should return "Hello, world"
    ✓ return null if value is not a string
```
```
  testing module arithmetic.js
    ✓ this should add the two integers
    ✓ error
    ✓ error
    ✓ this should state "null"
    ✓ this should subtract the two integers
```

  11 passing (10ms)
