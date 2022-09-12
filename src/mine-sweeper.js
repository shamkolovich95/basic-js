const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  // remove line with error and write your code here
  let count, result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = [];
    arr[0].includes(true) ? count = 1 : count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j + 1] || arr[i][j - 1]) {
        count++;
        arr[i][j + 1] = false;
      }
      result[i].push(count);
      arr[0].includes(true) ? count = 1 : count = 0;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
