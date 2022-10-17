const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(arr) {
    let number = 0;
    if (arr.length == 0) {
        return number;
    } else {
        for (let i = 0; i < arr.length; i++ ) {
            arr[i].forEach((elem) => {
                if (elem == '^^') {
                    number++;
                }
            });
        }
    }
    return number;
}

module.exports = {
  countCats
};
