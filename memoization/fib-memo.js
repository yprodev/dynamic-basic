/*
	Write a function "fib(n)" that takes in a number as an argument.
	The function should return the n-th number of the Fibonacci sequence.

	The 1st and 2nd number of the sequence is 1.
	To generate the next number of the sequence, we sum the previous two.

	position (n); 1, 2, 3, 4, 5, 6,  7,  8,  9, 10, ...
	fib(n):       1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
*/

// Classic recursive implementation
// Time complexity: 
const fib = (n) => {
	if (n <= 2) return 1; // First two positions equal 1, so we return 1

	return fib(n - 1) + fib(n - 2);
};

// console.log(fib(6)); // 8
// console.log(fib(7)); // 13
// console.log(fib(8)); // 21
// console.log(fib(50)); // Takes too long to be completed with a classic implementation

// ==================================================================================

// Memoization
// 	js object:
// 		keys will be arg to fn,
// 		value will be the return value

// Memo object is empty and default value is empty for the top level function call
const fibMemo = (n, memo = {}) => {
	// Use already calculated value
	if (n in memo) return memo[n];
	// Base case
	if (n <= 2) return 1;
	// Store after calculation AND pass the memo object to the next step (very important)
	memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

	return memo[n];
};

console.log(fibMemo(6)); // 8
console.log(fibMemo(7)); // 13
console.log(fibMemo(8)); // 21
console.log(fibMemo(50)); // 12586269025

// ==================================================================================
