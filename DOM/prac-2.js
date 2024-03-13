let newBtn = document.createElement("button");
newBtn.innerText = "click ME!";

newBtn.style.backgroundColor = "red"          
newBtn.style.color = "white"   

document.querySelector("body").prepend(newBtn);


//Qs2

let myPara=document.querySelector("p");



// myPara.setAttribute("class","newPara");   //here , new class override old class styling


//both class execute using "classList"

myPara.classList.add("newPara");  


//to remove new class
// myPara.classList.remove("newPara"); 