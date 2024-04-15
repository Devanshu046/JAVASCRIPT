function sum(a,b){
    console.log(a+b);
}

function calc(a,b,sumCallback){
    sumCallback(a,b)
}

calc(5,2,sum);