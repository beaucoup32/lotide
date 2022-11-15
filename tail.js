const assertEqual = function(acutal, expected) {
  if (acutal === expected) {
    return console.log(`🤓 Assertion Passed: [${acutal}] === [${expected}]`);
  } else {
    return console.log(`🤡 Assertion Failed: [${acutal}] !== [${expected}]`);
  }
};

const tail = function(array) {
  let output = array.slice(1);
  return output;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

tail(["beaucoup"]);
