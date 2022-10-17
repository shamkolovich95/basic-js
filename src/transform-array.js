const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [].concat(arr);
  let examples = ['--discard-prev', '--double-prev', '--double-next', '--discard-next'];
  let flag = true;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === examples[0]) {
      if (i === 0) result.splice(i, 1);
      else {
        if (flag) {
          result.splice(i - 1, 2);
          i--;
          flag = false;
        } else result.splice(i, 1);
      }
    }
    if (result[i] === examples[3]) {
      if (i === result.length - 1) result.splice(i, 1);
      else {
        if (flag) {
          result.splice(i, 2);
          i--;
          flag = false;
        } else result.splice(i, 1);
      }
    }
    if (result[i] === examples[1]) {
      if (i === 0) result.splice(i, 1);
      else {
        if (result[i - 1] && flag) result.splice(i, 1, arr[i - 1]);
        else result.splice(i, 1);
      }
    }
    if (result[i] === examples[2]) {
      if (i === result.length - 1) result.splice(i, 1);
      else result.splice(i, 1, arr[i + 1]);
    }
  }
  return result
}

module.exports = {
  transform
};
