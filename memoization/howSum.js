/*

	Write a function 'howSum(targetSum, numbers)' that takes in a
	targetSum and an array of numbers as arguments.

	The function should return an array containing any combination
	of elements that add up to excatly the targetSum. If there is no
	combination that adds up to the targetSum, then return null.

	If there are multiple combinations possible, you may return any
	single one.

*/

const howSum = (targetSum, numbers) => {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remider = targetSum - num;
		const reminderResult = howSum(remider, numbers);

		if (reminderResult !== null) {
			return [ ...reminderResult, num ];
		}
	}

	return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])); // null

// m = target sum
// n = numbers length

// Time: O(n ^ m * m)
// Space: O(m)

// ====================================================================================


const howSumMemo = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remider = targetSum - num;
		const reminderResult = howSumMemo(remider, numbers, memo);

		if (reminderResult !== null) {
			memo[targetSum] = [ ...reminderResult, num ];
			return memo[targetSum];
		}
	}

	memo[targetSum] = null;
	return null;
};

console.log(howSumMemo(7, [2, 3])); // [3, 2, 2]
console.log(howSumMemo(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSumMemo(7, [2, 4])); // null
console.log(howSumMemo(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSumMemo(300, [7, 14])); // null

// Time: O(n * m^2)
// Space: O(m^2)




