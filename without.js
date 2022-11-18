function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`⚖️ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`📉 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}

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

function without(arr, rmArr) {
  let newArr = [];
  for (let item of arr) {
    if (!rmArr.includes(item)) {
      newArr.push(item);

    }
  }
  return newArr;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
