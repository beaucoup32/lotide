const assertArraysEqual = require("../assertArraysEqual");

//test function
assertArraysEqual([1, 2, 3], [1, 3, 3]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);