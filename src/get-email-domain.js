const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  // remove line with error and write your code here
  let i = str.lastIndexOf('@');
  return str.slice(i + 1);
}

module.exports = {
  getEmailDomain
};
