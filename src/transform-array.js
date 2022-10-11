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
function transform(array) {
  // remove line with error and write your code here
  //if (array instanceof Array) {
  let arr = [].concat(array)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      //result.push(arr[i + 1], arr[i + 1]);
    }
    if (arr[i] === '--double-prev') {
      //result.push(arr[i - 1], arr[i - 1])
    }
    if (arr[i] === '--discard-next') {
      //result.splice(i + 1, 1);
    }
    if (arr[i] === '--discard-prev') {
      //result.splice(i - 1, 1);
    }
    if (typeof arr[i] === 'number') {
      //result.push(arr[i]);
    }
  }
  return arr;
  //} else throw new NotImplementedError("\'arr\' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
