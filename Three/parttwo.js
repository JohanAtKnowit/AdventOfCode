const fs = require("fs");
const inputFile = fs.readFileSync("./puzzleInput.txt", "utf8");

const regexPattern = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
const matches = inputFile.match(regexPattern);

let totalSum = 0;
let isEnabled = true;
matches.forEach((match) => {
  const value = extractData(match);
  totalSum += value;
});

function extractData(input) {
  const regex = /^([a-zA-Z]+)\((\d{1,3}),(\d{1,3})\)$/;
  if (input === "do()") {
    isEnabled = true;
    console.log("Enabled mul!");
    return 0;
  } else if (input === "don't()") {
    console.log("Disabled mul!");
    isEnabled = false;
    return 0;
  }
  if (!isEnabled) {
    console.log("Skipped");
    return 0;
  }
  const match = input.match(regex);
  let method = "mul";
  let value1 = 0;
  let value2 = 0;

  if (match) {
    method = match[1];
    value1 = parseInt(match[2], 10);
    value2 = parseInt(match[3], 10);
  } else {
    return 0;
  }

  console.log(`Multiplying: ${value1} * ${value2}`);
  return value1 * value2;
}

console.log("Total sum is: " + totalSum);
