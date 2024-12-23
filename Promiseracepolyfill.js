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
