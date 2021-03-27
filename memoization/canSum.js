/*

	Write a function 'canSum(targetSum, numbers)' that takes in a
	targetSum and an array of numbers as arguments.

*/

const canSum = (targetSum, numbers) => {
	if (targetSum === 0) return true;
	if (targetSum < 0) return false; // for negative numbers after substruction

	for (let num of numbers) {
		const remainder = targetSum - num;

		if (canSum(remainder, numbers)) return true;
	}

	return false;

};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true 
// console.log(canSum(300, [7, 14])); // false

// m = target sum
// n = array length

// Time: O(n^m)
// Space: O(m)

// ====================================================================================

const canSumMemo = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false; // for negative numbers after substruction

	for (let num of numbers) {
		const remainder = targetSum - num;
		if (canSumMemo(remainder, numbers, memo)) {
			memo[targetSum] = true;
			return true;
		}
	}

	memo[targetSum] = false;
	return false;
};

console.log(canSumMemo(7, [2, 3])); // true
console.log(canSumMemo(7, [5, 3, 4, 7])); // true
console.log(canSumMemo(7, [2, 4])); // false
console.log(canSumMemo(8, [2, 3, 5])); // true 
console.log(canSumMemo(300, [7, 14])); // false

// Time: O(m * n)
// Space: O(m)

