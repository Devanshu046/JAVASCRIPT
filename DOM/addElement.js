let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText="click me!"

let div = document.querySelector("div");
div.append(newBtn); //end of the element
div.prepend(newBtn); //start of the element
div.before(newBtn); //before the entire element
div.after(newBtn); //after the entire element
div.appendChild(newBtn); //after the entire element



//remove node
let para = document.querySelector("p")
para.remove();
