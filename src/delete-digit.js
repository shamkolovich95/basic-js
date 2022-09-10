const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  // remove line with error and write your code here
  let result = 0;
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (result < str.replace(str[i], "")) result = str.replace(str[i], "");
  }
  return Number(result);
}

module.exports = {
  deleteDigit
};
