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

array1.sort((a, b) => a - b);
array2.sort((a, b) => a - b);

let totalDistance = 0;

for (let i = 0; i < array1.length; i++) {
  let distance = array1[i] - array2[i];
  if (distance < 0) {
    distance *= -1;
  }
  totalDistance += distance;
}

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Total Distance: " + totalDistance);
