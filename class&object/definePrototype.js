const obj1 = {
    calTax(){
        console.log("tax is 10%");
    }
}
const obj2={
    salary : 50000,
    calTax(){
        console.log("tax is 20%")
    }
}
const obj3={
    salary : 30000
}
const obj4={
    salary : 20000
}

obj2.__proto__ =obj1;
obj3.__proto__ =obj1;
obj4.__proto__ =obj1;

obj2.calTax();

//important note :if object and prototype have same method(same method name) then object's method will be used.