function asyncfun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("success");
    }, 4000);
  });
}
function asyncfun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2");
      resolve("success");
    }, 4000);
  });
}
// console.log("fetching data1...")
// let p1 = asyncfun1();
// p1.then((res)=>{
//    console.log(res)
// });
// console.log("fetching data2...")
// let p2 = asyncfun2();
// p2.then((res)=>{
//    console.log(res)
// });

// in above commented code both promises execute simultanously but we need one by one

console.log("fetching data1...");
asyncfun1().then((res) => {
  console.log("fetching data2...");
  asyncfun2().then((res) => {
    console.log(res);
  });
});
//promise chaining