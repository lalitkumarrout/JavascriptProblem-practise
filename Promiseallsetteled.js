function allsettled(promise) {
  const mappedpromise = promise.map((promise) =>
    Promise.resolve(promise).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );
  return Promise.all(mappedpromise);
}

const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 200);
});

const b = new Promise((resolve, reject) => {
  reject(9);
});

const c = new Promise((resolve) => {
  resolve(6);
});

allsettled([a, b, c]).then((val) => {
  console.log(val);
});
