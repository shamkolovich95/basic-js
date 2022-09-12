const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
  // remove line with error and write your code here
  let result = [];
  for (let i = 0; i < (obj.repeatTimes || 1); i++) {
    result.push(str);
    for (let j = 0; j < (obj.additionRepeatTimes || 1); j++) {
      if (obj.addition === false || obj.addition === null) result[i] += '' + obj.addition;
      else result[i] += (obj.addition || '');
      if (obj.additionRepeatTimes === undefined || obj.additionRepeatTimes - 1 === j) break;
      else result[i] += (obj.additionSeparator || '|');
    }
  }
  return obj.separator ? result.join(obj.separator) : result.join('+')
}

module.exports = {
  repeater
};
