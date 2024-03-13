let arr= [5,2,9,7];
let  output = arr.reduce((prev,curr)=>{
    return prev>curr ? prev : curr;
});

console.log(output)