function vowels(word) {
  const finalWord = [];
  for (let i of word) {
    if (i == "a" || i == "u" || i == "o" || i == "i" || i == "e") {
      finalWord.push(i);
    }
  }
  return finalWord;
}

let val = prompt("enter a word:");
// console.log(val)
console.log(vowels(val));
