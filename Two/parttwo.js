const fs = require("fs");
const inputFile = fs.readFileSync("./puzzleInput.txt", "utf8");

const array2D = inputFile
  .split("\n")
  .map((line) => line.trim().split(/\s+/).map(Number));

let numberOfSafeReports = 0;

array2D.forEach((line, index) => {
  let foundDampener = false;
  let reportSafe = checkReport(line, index);
  if (!reportSafe) {
    line.forEach((level, levelIndex) => {
      const reportToCheck = line.filter(
        (k, lineIndex) => levelIndex !== lineIndex
      );
      if (checkReport(reportToCheck, index)) {
        foundDampener = true;
      }
    });
  }
  if (reportSafe || foundDampener) {
    numberOfSafeReports++;
  }
});

function checkReport(report, index) {
  const allowedDifference = 3;
  let increasing = false;
  let decreasing = false;
  for (let i = 0; i < report.length - 1; i++) {
    const difference = report[i] - report[i + 1];
    if (difference > 0) {
      decreasing = true;
    } else if (difference < 0) {
      increasing = true;
    }
    if (difference > allowedDifference || difference < -allowedDifference) {
      console.log(
        `Report ${index + 1} deemed unsafe due to exceeded safe margins.`
      );
      return false;
    } else if (difference === 0) {
      console.log(
        `Report ${index + 1} deemed unsafe due to levels not moving.`
      );
      return false;
    } else if (increasing && decreasing) {
      console.log(
        `Report ${index + 1} deemed unsafe due to fluxuating levels.`
      );
      return false;
    }
  }
  console.log("Report is safe.");
  return true;
}

console.log(numberOfSafeReports);
