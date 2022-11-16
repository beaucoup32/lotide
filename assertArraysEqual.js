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

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`⚖️ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`📉 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//test function
assertArraysEqual([1, 2, 3], [1, 3, 3]);