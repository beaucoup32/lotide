const assert = require('chai').assert;
const tail = require('../tail');

describe('Testing for tail function', () => {

  it(`return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];

    assert.deepEqual(tail(words), expected);
  });

});
