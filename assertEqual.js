function assertEqual(acutal, expected) {
  if (acutal === expected) {
    return console.log(`🤓 Assertion Passed: [${acutal}] === [${expected}]`);
  } else {
    return console.log(`🤡 Assertion Failed: [${acutal}] !== [${expected}]`);
  }
};

module.exports = assertEqual;