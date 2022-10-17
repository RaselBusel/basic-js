const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  constructor() {
      this.count = 1;
      this.arrDeep = [];
      this.maxDeep;
  }

  calculateDepth(array) {

      this.diveInto(array);
      this.maxDeep = Math.max(...this.arrDeep);

      return this.maxDeep;
  }

  diveInto(array) {

      for (let i = 0; i <= array.length; i++) {
          if ((array.length == 0) || (array == [])) {
              console.log('empty');
              this.arrDeep.push(this.count);
              this.count--;
          }
          else if ( Array.isArray(array[i]) ) {
              this.count++;
              this.diveInto(array[i]);
              if (i == array.length - 1) {
                  this.count--;
              }
          }
          else if (i == array.length - 1) {
              this.arrDeep.push(this.count);
              this.count--;
          }
      }
  }

}

let depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
