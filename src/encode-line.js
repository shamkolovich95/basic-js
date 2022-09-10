const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // remove line with error and write your code here
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (str.slice(i + 1).includes(str[i])) count++;
    else result += count + str[i];
  }
  return result
}

module.exports = {
  encodeLine
};
