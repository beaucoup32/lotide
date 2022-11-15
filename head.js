function assertEqual(acutal, expected) {
  if (acutal === expected) {
    return console.log(`🤓 Assertion Passed: [${acutal}] === [${expected}]`);
  } else {
    return console.log(`🤡 Assertion Failed: [${acutal}] !== [${expected}]`);
  }
};

function head(array) {
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");