let toggle = document.querySelector("#toggle");
let body = document.querySelector("body")
let currMode = "light";
toggle.addEventListener("click",()=>{
   if(currMode == "light"){
    currMode = "dark"
    body.classList.remove("light");
    body.classList.add("dark");
}else{
    currMode = "light"
    body.classList.remove("dark");
    body.classList.add("light");
   }
   console.log(currMode);
})