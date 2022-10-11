const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // remove line with error and write your code here
    let count = 0;
    let num;
    arr !== undefined ? num = arr.length : 1;
    for (let i = 0; i < num; i++) {
      if (Array.isArray(arr[i])) {
        arr = arr.flat();
        count++;
        count += this.calculateDepth(arr[i]);
      } else if (Array.isArray(arr)) {
        count++;
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
