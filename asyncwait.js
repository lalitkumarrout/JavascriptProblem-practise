
//using normal asyncwait function
// const asyncexexutor = async function (promises) {
//   for (let promise of promises) {
//     try {
//       const result = await promise;
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };


//using recursion

// const asyncexexutor=function(promises){
//   const promise=promises.shift();

//   promise.then((data)=>{
//     console.log(data);

//     if(promises.length>0){
//       asyncexexutor(promises);
//     }
//   })
// }

//using Array Reduce

const asyncexexutor=function(promises){
  promises.reduce((acc,curr)=>{
    return acc.then(()=>{
      return curr.then((val)=>{
        console.log(val);
      })
    })
  },Promise.resolve());
}





const asynctask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => 
      resolve(`completing task ${i}`),
     100 * i);
  });
};


const promise = [asynctask(3), asynctask(4), asynctask(5), asynctask(8)];
asyncexexutor(promise);
