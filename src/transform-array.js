const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

/*
function transform(arr) {
  let arrBase = arr.concat();
  let arrModified = [];
  let j;

  if (!Array.isArray(arr)) {
      console.log("'arr' parameter must be an instance of the Array!");
      return "'arr' parameter must be an instance of the Array!";
  }
  else {
      for (let i = 0; i < arrBase.length; i++) {
          j = 0;
          //console.log(arr[i].toString());
          if (arrBase[i].toString().startsWith('--double')) {
              doublFunc(i);
          }
          else if (arrBase[i].toString().startsWith('--discard')) {
              discFunc(i);
              i = j;
          }
          else {
              arrModified.push(arrBase[i]);
          }
      }
  }

function doublFunc(i) {
  console.log('--double');
  if ((arrBase[i] == '--double-next') && (i !== arrBase.length - 1)) {
      arrModified.push(arrBase[i + 1]);
  }
  else if ((arrBase[i] == '--double-prev') && (i !== 0)) {
      arrModified.push(arrBase[i - 1]);
  }
}

function discFunc(i) {
  console.log('--discard');
  if ((arrBase[i] == '--discard-next') && (i !== arrBase.length - 1)) {
      return;
  }
  if ((arrBase[i] == '--discard-prev') && (i !== 0)) {
      arrModified.pop();
      j = i;
      return j;
  }
  else if (arrBase[i] == '--discard-next') {
      j = i + 1;
      return j;
  }
}
  console.log(arrModified);
  return arrModified;
}
*/
module.exports = {
  transform
};
