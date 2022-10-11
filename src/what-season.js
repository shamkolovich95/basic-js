const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // remove line with error and write your code here
  let result = ['spring', 'summer', 'autumn', 'winter']
  let month = date.getMonth();
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (!isNaN(date.getTime())) {
      if (month === 11 || month < 2) {
        return result[3];
      } else if (month < 5) {
        return result[0];
      } else if (month < 8) {
        return result[1];
      } else if (month < 11) {
        return result[2];
      }
    }
  } else {
    throw new NotImplementedError('Unable to determine the time of year!');
  }


}


module.exports = {
  getSeason
};
