const foo = (n) => {
	if (n <= 1) return;

	foo(n - 1);
};

// O(n) time
// O(n) space

// =========================

const bar = (n) => {
	if (n <= 1) return;

	bar(n - 2);
};

// O(n/2) ---> O(n) time
// O(n/2) ---> O(n) space

// =========================

const dib = (n) => {
	if (n <= 1) return;

	dib(n - 1);
	dib(n - 2);
};

// Height of a tree / number of levels / max stack depth: n

// O(2^n) time
// O(n) space (max stack depth)

// =========================

const lib = (n) => {
	if (n <= 1) return;

	lib(n - 2);
	lib(n - 2);
};

// O(2^(n/2)) ---> O(2^n) time
// O(n) space

// =========================

const fib = (n) => {
	if (n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
};


// O(2^n) time
// O(n) space

// fib(50) ~= 2^50 steps to find the number 1.12e + 15 (16 digit number) = 1 125 899 906 842 624

// =========================





