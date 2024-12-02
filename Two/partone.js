const fs = require("fs");
const inputFile = fs.readFileSync("./puzzleInput.txt", "utf8");

const array2D = inputFile
  .split("\n")
  .map((line) => line.trim().split(/\s+/).map(Number));

let numberOfUnsafeReports = 0;

array2D.forEach((line, index) => {
  const allowedDifference = 3;
  for (let i = 0; i < line.length - 1; i++) {
    if (
      line[i] - line[i + 1] > allowedDifference ||
      line[i] - line[i + 1] < -allowedDifference
    ) {
      console.log(
        "Report " +
          (index + 1) +
          " deemed unsafe. Safe margins exceeded at index: " +
          (i + 1) +
          ". Difference was: " +
          (line[i] - line[i + 1]) +
          "."
      );
      numberOfUnsafeReports++;
      return true;
    }
  }
});

console.log("Found " + numberOfUnsafeReports + " unsafe reports.");
