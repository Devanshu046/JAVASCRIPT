// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather")
//             resolve(200);
//         },2000);
//     });
// }

// async function weatherData(){
//     await api();
// }  normal example

function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
      }, 2000);
    });
  }

  async function getAlldata(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
  } //here we have to call another function to implement instead we can use IIFE(immmediately invoked function expression)

  //IIFE
(async function() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
})();
