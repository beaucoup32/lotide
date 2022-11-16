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

//test function
assertArraysEqual([1, 2, 3], [1, 3, 3]);