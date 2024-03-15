const obj1 = {
    calTax(){
        console.log("tax is 10%");
    }
}
const obj2={
    salary : 50000
}

obj2.__proto__ =obj1;