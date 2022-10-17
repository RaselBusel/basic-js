const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(numb) {
  let numbStr = numb.toString();
  let maxNum = 0;

  for (let i = 0; i < numbStr.length; i++) {
      let numbInCash = numbStr;

      let substringLeft = numbInCash.substring(0, i);
      let substringRight = numbInCash.substring((i + 1) );
      numbInCash = substringLeft.concat(substringRight);

      if (Number(numbInCash) > maxNum) {
          maxNum = Number(numbInCash)
      }
  }
  return maxNum;
}


module.exports = {
  deleteDigit
};
