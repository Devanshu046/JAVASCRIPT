const user = {
  username: "dev",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got Details");
    console.log(`username : ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(this);
// console.log((user.getUserDetails()));

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${username}`);
  };

  return this;
}

const userOne = new User("Dev", 12, true);
const userTwo = new User("Devanshu", 21, false);

console.log(userTwo.constructor);
