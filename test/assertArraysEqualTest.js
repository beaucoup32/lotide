const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

//test function

describe('Testing for assertArrayEqual', () => {
  it('returns false for [1, 2, 3] === [1, 3, 3]', () => {
    
    assert.notStrictEqual(assertArraysEqual([1, 2, 3], [1, 3, 3]), false);
  });

  it('returns false for [3, 2, 1] === [1, 3, 3]', () => {
    
    assert.notStrictEqual(assertArraysEqual([3, 2, 1], [1, 2, 3]), false);
  });


})
