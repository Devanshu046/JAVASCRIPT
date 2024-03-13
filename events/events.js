let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("hiii");
};
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  console.log("welcome!1");
});
btn2.addEventListener("click", () => {
  console.log("welcome!2");
});
const handler3 = () => {
  console.log("welcome!3");
};
btn2.addEventListener("click", handler3);
btn2.removeEventListener("click",handler3);  //to remove event listener

btn2.addEventListener("click", () => {
  console.log("welcome!4");
});
