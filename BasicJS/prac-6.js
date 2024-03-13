// let marks = [ 94,91,85,60,45,98];
// let newArr = marks.filter((val)=>{
//     return val > 90 ;
// });
// console.log(newArr);



let n =prompt("enter a number:")
let arr = [];
for(let i =0 ; i<n; i++){
    arr[i] = i+1;
}
console.log(arr);    

let output = arr.reduce((prev,curr)=>{
    return prev + curr ;
})
let factorial = arr.reduce((prev,curr)=>{
    return prev * curr ;
})

console.log(output);    
console.log(factorial);    