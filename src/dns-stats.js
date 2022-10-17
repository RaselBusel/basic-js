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
  let arrSorted = [].concat(arr);
  let arrReversed = [];
  let levelDip = 0;
  let dnsCounted = {};

  // Initial Defalt Value to Array
  for (let i = 0; i < arrSorted.length; i++) {

      arrSorted[i] = arrSorted[i].split('.');
      arrReversed[i] = arrSorted[i].reverse();
      if (arrReversed[i].length > levelDip) {
          levelDip = arrReversed[i].length;
      }
  }

  compare(arrReversed, levelDip);

  function compare(array, level) {
      let strDNS;

      for (let i = 0; i < level; i++) {
          for (let j = 0; j < array.length; j++) {
              strDNS = strSum(array[j], i);
              if (strDNS !== false) {
                  dnsWrite(strDNS, dnsCounted);
              }
          }
      }
  }

  // f() => Str1 + Str2 + ... = Str
  function strSum(array, lev) {
      let strS = '';
      if (array.length <= lev)   {
          return false;
      }
      else if (array == [] || array.toString() == '') {
          return false;
      }
      else {
          for (let i = 0; i <= lev; i++) {
              strS += '.' + array[i];
          }
          return strS;
      }
  }

  function dnsWrite(string, object) {
      if (string in object) {
          object[string]++;
      }
      else {
          object[string] = 1;
      }
     return dnsCounted;
  }
  return dnsCounted;
}


module.exports = {
  getDNSStats
};
