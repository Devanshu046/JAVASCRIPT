// let heading = document.querySelector('h1');
// console.dir(heading);
// heading.innerText = heading.innerText + " from apna college";


let divs = document.querySelectorAll(".box")
let idx=1;
for(div of divs){
    console.log(div.innerHTML);
    div.innerHTML = `new text ${idx}`
    idx++;
}


// divs[0].innerHTML= "new text1";
// divs[1].innerHTML= "new text2";
// divs[2].innerHTML= "new text3";