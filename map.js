function eqArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

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

const words = ["plus", "on", "block", "parry", "unblockable"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, ["p", "o", "b", "p", "u"]);
