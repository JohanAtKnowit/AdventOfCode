const fs = require("fs");
const inputFile = fs.readFileSync("./puzzleInput.txt", "utf8");

const input = inputFile;
const numbers = input.trim().split(/\s+/).map(Number);

const array1 = [];
const array2 = [];

numbers.forEach((number, index) => {
  if (index % 2 === 0) {
    array1.push(number);
  } else {
    array2.push(number);
  }
});

let similarityScore = 0;

array1.forEach((number1) => {
  const multiplicationValue = array2.filter(
    (number2) => number1 === number2
  ).length;
  similarityScore += number1 * multiplicationValue;
  if (multiplicationValue > 0) {
    console.log("Checked number was: " + number1);
    console.log("Found " + multiplicationValue + " instances.");
    console.log(
      "Added " + number1 * multiplicationValue + " to the similarity score."
    );
  }
});

console.log("Total similarity score is: " + similarityScore);
