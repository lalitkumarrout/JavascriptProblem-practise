// Promise.all() polyfill
// Definition
// According to MDN –
// The Promise.all() accepts an array of promises and returns a promise
// that resolves when all of the promises in the array are fulfilled or when
// the iterable contains no promises. It rejects with the reason of the first
// promise that rejects.
// After reading the definition of Promise.all() we can break down the
// problem in sub-problem and tackle it one by one.
// ● It will return a promise.
// ● The promise will resolve with the result of all the passed
// promises or reject with the error message of the first failed
// promise.
// ● The results are returned in the same order as the promises are in
// the given array.

const mypromiseall = function (tasklist) {
  let results = [];

  var tasklistnum = 0;

  return new Promise((resolve, reject) => {
    tasklist.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          tasklistnum += 1;

          if (tasklistnum === tasklist.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Test case
// input1
function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const tasklist = [task(1000), task(3000), task(5000)];

mypromiseall(tasklist)
  .then((results) => {
    console.log("results", results);
  })
  .catch(console.error);
