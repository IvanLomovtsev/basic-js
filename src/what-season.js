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
  if (typeof(date) == `undefined` ) return  'Unable to determine the time of year!'
  try { date.getTime() } catch { throw new Error(`Invalid date!`) }
  let monthOfWinter = [0, 1, 11];
  let monthOfSpring = [2, 3, 4];
  let monthOfSummer = [5, 6, 7];
  let monthOfAutumn = [8, 9, 10];
  if (monthOfWinter.includes(date.getMonth())) {
    return 'winter';
  }
  else if (monthOfSpring.includes(date.getMonth())) {
    return 'spring';
  }
  else if (monthOfSummer.includes(date.getMonth())) {
    return 'summer';
  }
  else if (monthOfAutumn.includes(date.getMonth())) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
