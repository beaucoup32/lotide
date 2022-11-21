const eqArrays = require("./eqArrays");

function assertArraysEqual(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    return console.log(
      `⚖️ Assertion Passed: [${actualArr}] === [${expectedArr}]`
    );
  } else {
    return console.log(
      `📉 Assertion Failed: [${actualArr}] !== [${expectedArr}]`
    );
  }
}

module.exports = assertArraysEqual;
