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

    calculateDepth(array) {

        let count = 1;
        let arrDeep = [];
        let maxDeep;

        diveInto(array);

        function diveInto(array) {

            for (let i = 0; i <= array.length; i++) {
                if ((array.length == 0) || (array == [])) {
                    //console.log('empty');
                    arrDeep.push(count);
                    count--;
                }
                else if ( Array.isArray(array[i]) ) {
                    count++;
                    diveInto(array[i]);
                    if (i == array.length - 1) {
                        count--;
                    }
                }
                else if (i == array.length - 1) {
                    arrDeep.push(count);
                    count--;
                }
            }
        }

        maxDeep = Math.max(...arrDeep);
        return maxDeep;
    }
}

let depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
