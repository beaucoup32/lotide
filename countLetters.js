function assertEqual(acutal, expected) {
  if (acutal === expected) {
    return console.log(`🤓 Assertion Passed: [${acutal}] === [${expected}]`);
  } else {
    return console.log(`🤡 Assertion Failed: [${acutal}] !== [${expected}]`);
  }
}

function countLetters(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (!result[letter]) {
        result[letter] = 0;
      }

      result[letter]++;
    }
  }
  return result;
}

console.log(countLetters("llighthouse      l a  b   s  "));
