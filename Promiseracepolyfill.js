
// According to MDN –
// The Promise.race() method returns a promise that fulfills or rejects as
// soon as one of the promises in an iterable fulfills or rejects, with the
// value or reason from that promise.
// Reading the definition, we can break the problem statement into
// sub-problems to implement the Promise.race() method.
// ● It returns a promise.
// ● The returned promise fulfills or rejects as soon as any one of
// the input promises fulfills or rejects.
// ● Returned promise resolves with the value of the input
// promise or rejects with the reason of the input promise.
// Thus we can create a function that will take an array of promises
// as input and return a new promise, inside this returned promise
// iterate the input promises and resolve or reject as soon as any of
// them resolves or rejects.






const race = function (PromiseArrays) {
  return new Promise( (resolve, reject)=> {
    PromiseArrays.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};

const Test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});

const Test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 300, "two");
});

const Test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 400, "three");
});

race([Test1, Test2, Test3])
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
