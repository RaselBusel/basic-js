const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    let MODERN_ACTIVITY = 15;
    let HALF_LIFE_PERIOD = 5730;
    //console.log(Number(sampleActivity));

    if ( !(parseInt(sampleActivity)) ) {
        return false;
    }
    else if  (15 < sampleActivity || sampleActivity <= 0) {
        return false;
    }
    else if  (typeof sampleActivity !== 'string' ) {
        return false;
    }
    else if  (sampleActivity == null || undefined ) {
        return false;
    }

    sampleActivity = Number(sampleActivity);
    let tHalf = 0.693 / HALF_LIFE_PERIOD;
    let logN0N = Math.log(MODERN_ACTIVITY / sampleActivity);
    let ageYearAgo = Math.ceil(logN0N / tHalf);

    return ageYearAgo;
}

module.exports = {
  dateSample
};
