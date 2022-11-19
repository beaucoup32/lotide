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

function eqObjects(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (const key in obj1) {
    const val1 = Object.values(obj1).sort();
    const val2 = Object.values(obj2).sort();
    if (Array.isArray(val1) && Array.isArray(val2)) {
      return eqArrays(val1.pop(), val2.pop());
    }
  }

  return true;
}

const assertObjectsEqual = function (actualObj, expectedObj) {
  const inspect = require("util").inspect;

  if (eqObjects(actualObj, expectedObj)) {
    return console.log(
      `🤓 Assertion Passed: [${inspect(actualObj)}] === [${inspect(
        expectedObj
      )}]`
    );
  }
  return console.log(
    `🤡 Assertion Failed: [${inspect(actualObj)}] !== [${inspect(expectedObj)}]`
  );
};

assertObjectsEqual({ a: 1, b: 2 }, { b: 1, a: 5, c: 3 });
