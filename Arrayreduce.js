// Array.reduce() is one of the most powerful methods available that can
// be used to perform different types of actions like segregation,
// aggregation, running things in sequence/series, etc.
// Anatomy of Array.reduce()
// verbose
arr.reduce(callbackfn, initialValue);
// simplified
// callback function with parameters
arr.reduce((previousValue, currentValue, currentIndex, array) => {
const nextValue = previousValue + currentValue;
return nextValue;
}, initialValue);

// Array.reduce() accepts a callback function and initial value as an input
// (initial value is optional). The function will be called for each element
// of the array with the initial value at the beginning and then with the
// value returned from the last call of the same function.
// The callback function has 4 parameters, (previousValue, currentValue,
// currentIndex, array).
// ● previousValue – The value returned from the last call of the
// same function or the initial value at the beginning.
// ● currentValue – Current value of the array.
// ● currentIndex – Current index position of the iteration.
// ● array – The array itself.
// Using this method we can perform different types of operations.