const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
    let strEncoded = '';

    if (str.length >= 2) {
        let count = 1;
        let charMem = str[0];

        for (let i = 1; i < str.length; i++) {
            if (str[i] == charMem) {
                count++;
            }
            else if (str[i] !== charMem) {
                //console.log(typeof charMem);
                if (count == 1) {
                    strEncoded = strEncoded.concat(charMem);
                }
                else {
                    strEncoded = strEncoded.concat(count, charMem);
                }
                count = 1;
                charMem = str[i];
            }
            if (i == str.length - 1) {
                if (count == 1) {
                    strEncoded = strEncoded.concat(charMem);
                }
                else {
                    strEncoded = strEncoded.concat(count, charMem);
                }
            }
        }
    }
    else if (str.length == 1) {
        strEncoded += str;
    }
    else if (str == '' || str == undefined) {
        strEncoded = '';
        //console.log('epmty');
        return strEncoded;
    }

    console.log("EnCoded " + strEncoded);
    return strEncoded;
}

module.exports = {
  encodeLine
};
