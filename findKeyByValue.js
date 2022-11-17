function assertEqual(acutal, expected) {
  if (acutal === expected) {
    return console.log(`🤓 Assertion Passed: [${acutal}] === [${expected}]`);
  } else {
    return console.log(`🤡 Assertion Failed: [${acutal}] !== [${expected}]`);
  }
}

function findKeyByValue(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);