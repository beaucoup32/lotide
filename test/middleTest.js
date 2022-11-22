const assert = require("chai").assert;
const middle = require("../middle");

describe("Testing for middle function", () => {
  it("returns [] for [1]", () => {
    assert.isEmpty(middle([1]));
  });

  it("returns [] for [1, 2]", () => {
    assert.isEmpty(middle([1, 2]));
  });

  it("returns [] for [1]", () => {
    assert.isEmpty(middle([1]));
  });

  it("returns [2] for [1, 2, 3]", () => {
    const expected = [2];
    assert.deepEqual(middle([1, 2, 3]), expected);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const expected = [3];
    assert.deepEqual(middle([1, 2, 3, 4, 5]), expected);
  });

  it("returns [2, 3] for [1, 2, 3 , 4]", () => {
    const expected = [2, 3];
    assert.deepEqual(middle([1, 2, 3, 4]), expected);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const expected = [3, 4];
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), expected);
  });
});
