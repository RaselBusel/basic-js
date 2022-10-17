const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let arrOrig = str1.split('');
  let arrMap = str2.split('');
  let count = 0;

  for (let i = 0; i < arrOrig.length; i++) {
      let indx = 0;
      if (arrMap.includes(arrOrig[i])) {
          count++;
          indx = arrMap.indexOf(arrOrig[i]);
          arrMap.splice(indx, 1);
      }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
