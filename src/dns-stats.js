const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  // remove line with error and write your code here
  if (arr.length === 0) return {};
  let count = 1;
  let result = {};
  let array = arr.join('.').split('.');
  console.log(array.slice(0, 4))
  let key = '';
  for (let i = array.length - 1; i >= 0; i--) {
    if (array.slice(0, i).includes(array[i])) count++;
    if (!key.includes(array[i])) key += '.' + array[i];
    result[key] = count;
    count = 1;
  }
  return result;
}

module.exports = {
  getDNSStats
};
