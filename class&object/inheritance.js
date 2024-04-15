//basic explanation
class parent {
  hello() {
    console.log("hello");
  }
}

class child extends parent {}
let obj = new child();
obj.hello();

//ex =2

class person {
  constructor() {
    console.log("we are human");
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("work hard");
  }
}

class engineer extends person {
  work() {
    console.log("working");
  }
}

let dev = new engineer();
dev.work();
dev.eat();
dev.sleep();

//if child and parent have same method then child method will be used
