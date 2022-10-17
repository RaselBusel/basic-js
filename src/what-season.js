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
 function getSeason(/* date */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
/*
function getSeason(dateIput) {
  let season;
  let n = new Date (Date.now());

  // isEmpty Check
  if (Math.round(Date.parse(dateIput) / 1000) == Math.round(n.getTime() / 1000)) {
      console.log('no papam');
      return 'Unable to determine the time of year!';
  }

  let a = dateIput.getFullYear();
  let b = dateIput.getMonth();
  let c = dateIput.getDate();


  // isValid parametrs check
  if (a <= 0 || a >= n.getFullYear()) {
      console.log('false year');
      return false;
  }
  else if (b < 0 || b > 11 ) {
      console.log('false month');
      return false;
  }
  else if (c < 1 || c > 31 ) {
      console.log('false day');
      return false;
  }

  // ADD isFebruary 29 check

  findMonthSeason(b)
  return season;
}

function findMonthSeason(m) {
  if (m == 11 || m == 0 || m == 1) {
      console.log('winter');
      return;
  }
  else if (2 <= m && m <= 4) {
      console.log('spring');
      return;
  }
  else if (5 <= m && m <= 7) {
      console.log('summer');
      return;
  }
  else if (8 <= m && m <= 10) {
      console.log('autumn');
      return;
  }
}
*/
module.exports = {
  getSeason
};
