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
};

function assertArraysEqual(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    return console.log(`⚖️ Assertion Passed: [${actualArr}] === [${expectedArr}]`);
  } else {
    return console.log(`📉 Assertion Failed: [${actualArr}] !== [${expectedArr}]`);
  }
};


const takeUntil = function (array, callback) {
  const output = [];
  for (let item of array) {
    if (!callback(item)) {
      output.push(item);
      
    }
    if (callback(item)) {
      return output;
    }
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);
