const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  // remove line with error and write your code here
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        if (arr[j].endsWith('(1)')) {
          arr[j] += '(1)';
        } else {
          arr[j] += `(${count})`;
          count++;
        }
      }
    }
  }
  return arr;
}

module.exports = {
  renameFiles
};
