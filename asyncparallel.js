function asyncparallel(tasks, callback) {
  let results = new Array(tasks.length);
  let taskscompleted = 0;

  tasks.forEach((task, index) => {
    task((value) => {
      results[index] = value;
      taskscompleted++;

      if (taskscompleted >= tasks.length) {
        callback(results);
      }
    });
  });
}

function createAsynctask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

const TaskList = [
  createAsynctask(),
  createAsynctask(),
  createAsynctask(),
  createAsynctask(),
  createAsynctask(),
];

asyncparallel(TaskList, (result) => {
  console.log("Result", result);
});
