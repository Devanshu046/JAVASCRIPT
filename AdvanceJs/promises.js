const getPromise = ()=>{
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
        // resolve("success");
        reject("network error");
    });
}

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled..",res)
}); //execute when promise get fulfilled

promise.catch((err)=>{
    console.log("rejected",err);
}); //execute when promise get rejected

// function getData(dataId, getnextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   console.log("data", dataId);
//     //   resolve("success")
//       reject("error occured..")
//       if (getnextData) {
//         getnextData();
//       }
//     }, 5000);
//   });
// }
