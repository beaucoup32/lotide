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
    return console.log(`⚖️ Assertion Passed: [${actualArr}] === [${expectedArr}]`);
  } else {
    return console.log(`📉 Assertion Failed: [${actualArr}] !== [${expectedArr}]`);
  }
}

function middle(arr) {
  if (arr.length < 3) {
    return [];
  }
  return arr.length % 2 !== 0
    ? [arr[(arr.length - 1) / 2]]
    : [arr[arr.length / 2 - 1], arr[arr.length / 2]];
}

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), ([2])); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3])); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])); // => [3, 4]