//asynchronous programming : in this code statement will not wait for previous to execute

console.log("one")
console.log("two")


setTimeout(hello,4000);  //4000ms = 4sec
function hello(){
    console.log("hello");
}
console.log("three")
console.log("four")