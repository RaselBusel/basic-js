const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let defVal = options;
  let strAdd = "";
  let strExt = "";

  defValCheck(defVal, str);

  if (defVal.addition !== '') {
      strAdd = booster(defVal.addition, defVal.additionRepeatTimes, defVal.additionSeparator, strAdd);
  }
  else {
      strAdd = '';
  }

  strExt = booster(str, defVal.repeatTimes, defVal.separator, strAdd);

  return strExt;
}


function defValCheck(defVal, str) {

    if (str === null) {
        str = "null";
    }
    else {
        str = str.toString();
    }


    if ( defVal.addition === null) {
        defVal.addition = "null";
    }
    else if (defVal.addition == undefined) {
        defVal.addition = "";
    }
    else if ((defVal.addition !== undefined || null)) {
        defVal.addition = defVal.addition.toString();
    }

    if (defVal.repeatTimes == undefined) {
        defVal.repeatTimes = 1
    }
    if (defVal.additionRepeatTimes == undefined &&
         defVal.addition !== undefined) {
        defVal.additionRepeatTimes = 1
    }

    !defVal.separator ? defVal.separator = '+' : "";
    !defVal.additionSeparator ? defVal.additionSeparator = '|' : "";

    return defVal, str;
}

function booster(str, repeat, separtor, add) {
  if (add == undefined) {
      str = str + '';
      return str;
  }
  else {
      str = str + add;
      let arr = Array(repeat);
      arr.fill(str);
      return arr.join(separtor);
  }

}


module.exports = {
  repeater
};
