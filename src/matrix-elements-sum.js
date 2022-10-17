const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let numbSum = 0;

  matrix.forEach(elem => {
      numbSum += elem.reduce((prev, curr) =>
      curr > 0 ? prev + curr : prev
      , 0);
  });
  return numbSum;
}

module.exports = {
  getMatrixElementsSum
};
