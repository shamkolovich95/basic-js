const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  // remove line with error and write your code here
  if (!Array.isArray(arr) || !arr.length) return false;
  return arr.filter(item => typeof item === 'string')
    .map(item => item.replace(/\s/g, '')[0].toUpperCase())
    .sort((a, b) => a.codePointAt() - b.codePointAt())
    .join('');
}

module.exports = {
  createDreamTeam
};
