## **README**
---
This package allows users to greet and do basic add and subtract arithmetic operations.

----
#### **GREET Module**
The greet module accepts a string value and returns a concatenated or a null if an invalid data type is passed. 

To use GREET module:
```javascript 
	const greeting = require('./libs/greet.js');
	
	//Prints Hello, world!
	console.log(greeting('world!'));

	//Prints a null due to invalid string value passed
	console.log(greeting(10));
```
----
#### **ARITHMETIC Module**
The Arithmetic Module accepts  two number parameters and returns a value depending on the arithmetic value. It will return a null if there are invalid number provided. 



```javascript
	const arithmetic = require('../libs/arithmetic.js');

	/*  arithmetic.add() - Adds both numbers
		arithmetic.sub() - Subtracts the first number from the second one */
		
	//Returns 2
	arithmetic.add(1,1);

	//Returns 1
	arithmetic.sub(2,1);
	
	//Returns null
	arithmetic.add('boop', 1);
	arithemtic.sub('baap', 1);
```