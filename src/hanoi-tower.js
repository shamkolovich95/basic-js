const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disc, sec) {
  // remove line with error and write your code here
  let result = {};
  result.turns = Math.pow(2, disc) - 1;
  result.seconds = Math.floor(3600 * result.turns / sec);
  return result;
}

module.exports = {
  calculateHanoi
};
