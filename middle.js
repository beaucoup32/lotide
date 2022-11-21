function middle(arr) {
  if (arr.length < 3) {
    return [];
  }
  return arr.length % 2 !== 0
    ? [arr[(arr.length - 1) / 2]]
    : [arr[arr.length / 2 - 1], arr[arr.length / 2]];
}

module.exports = middle;