const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  // remove line with error and write your code here
  let counter = 0;
  for (let elem of arr) {
    if (Array.isArray(elem)) counter += countCats(elem);
    if (typeof elem === 'string' && elem.replace(/\s/g) === elem && elem.includes('^^')) counter++;
  }
  return counter;
}

module.exports = {
  countCats
};
