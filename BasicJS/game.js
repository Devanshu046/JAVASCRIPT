

let gameNumber= 4;

let guessNum = prompt("guess the number");


while(gameNumber != guessNum)
{
    guessNum = prompt("wrong number guess again !");
}

console.log("congratulations your guessed the right number")