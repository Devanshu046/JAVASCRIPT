let str1 = "Devanshu";
let str2 = "Parmar"

console.log(str1.length);


//slicing : ending index is non inclusive and  it is optional
console.log(str1.slice(2));

//concat
let result = str1.concat(str2);
//OR
let res= str1 + str2;

//trim : remove whitespace at beginning and ending
let st = "   dev  "
console.log(st.trim());

//replace
let name1 = "davanshu";
let output=name1.replace("a","e");
console.log(output);

//note:replace only replace one time with first matching character not in ALL

let outpt=name1.replaceAll("a","e");
console.log(outpt);
//replaceAll replace in all matching character