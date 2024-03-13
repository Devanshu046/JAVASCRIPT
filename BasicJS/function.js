function myFunction(){
    console.log("hello Dev!")
}
myFunction();


//now with params
function sum(x,y){
    let sum = x + y;
    console.log(sum);
    return sum;
}
let res = sum(3,7);
console.log(res);

//arrow function
//without params
const msg = ()=>{
    console.log("hello");
}
msg();


//with params
const sum1 = (a,b)=>
{
    let res = a + b;
    return res;
};
console.log(sum1(5,8));

