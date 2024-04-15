class person {
  constructor(name) {
    this.name = name;
    this.species = "homo sepiens";
  }
  eat() {
    console.log("eat");
  }
}

class engineer extends person {
  constructor(name) {
    super(name);
    //if parent and child(derived class) both have constructor then we have to use super keyword to first invoke parent constructor  and we have to pass parameter if we have to pass in parent constructor
  }
  work() {
    super.eat(); //using super to access parent method
    console.log("working");
  }
}
let dev = new engineer("devanshu");
