"use strict";

// User Guess
// const guess = Number(document.querySelector(".guess").value);
const guess = prompt("What is your guess?");
const guessArray = Array.from(String(guess), Number);

// Secret Number
function secretNumberFunction(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let secretNumber = secretNumberFunction(1000, 9999);
const secretArray = Array.from(String(secretNumber), Number);

for (let i = 0; i < 4; i++) {
  for (let x = 0; x < 4; x++) {
    if (secretArray[i] === guessArray[x]) {
      if (i === x) {
        console.log(
          `${secretArray[i]} is in the number and in the correct spot.`
        );
      } else {
        console.log(
          `${secretArray[i]} is in the number but in the wrong spot.`
        );
      }
    }
  }
}

console.log(guessArray, secretArray);
// document.querySelector(".enter").addEventListener("click", function () {});
