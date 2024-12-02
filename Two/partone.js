const fs = require("fs");
const inputFile = fs.readFileSync("./puzzleInput.txt", "utf8");

const array2D = inputFile
  .split("\n")
  .map((line) => line.trim().split(/\s+/).map(Number));

let numberOfUnsafeReports = 0;

array2D.forEach((line, index) => {
  const allowedDifference = 3;
  let increasing = false;
  let decreasing = false;
  for (let i = 0; i < line.length - 1; i++) {
    const difference = line[i] - line[i + 1];
    if (difference > 0) {
      decreasing = true;
    } else if (difference < 0) {
      increasing = true;
    }
    if (difference > allowedDifference || difference < -allowedDifference) {
      console.log(
        `Report ${index + 1} deemed unsafe due to exceeded safe margins.`
      );
      numberOfUnsafeReports++;
      return true;
    } else if (difference === 0) {
      console.log(
        `Report ${index + 1} deemed unsafe due to levels not moving.`
      );
      numberOfUnsafeReports++;
      return true;
    } else if (increasing && decreasing) {
      console.log(
        `Report ${index + 1} deemed unsafe due to fluxuating levels.`
      );
      numberOfUnsafeReports++;
      return true;
    }
  }
  console.log(
    `Report ${index + 1} deemed safe. Values were within threshhold and were ${
      increasing ? "increasing" : decreasing ? "decreasing" : "remaining steady"
    }.`
  );
});
const safeReports = array2D.length - numberOfUnsafeReports;
console.log("Found " + safeReports + " safe reports.");
