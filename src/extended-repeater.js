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
  str = str.toString();

  defValCheck(defVal);

  strAdd = booster(defVal.addition, defVal.additionRepeatTimes, defVal.additionSeparator, strAdd);
  strExt = booster(str, defVal.repeatTimes, defVal.separator, strAdd);

  return strExt;
}


function defValCheck(defVal) {
  defVal.addition = defVal.addition.toString();

  !defVal.repeatTimes ? defVal.repeatTimes = 0 : "";
  !defVal.additionRepeatTimes ? defVal.additionRepeatTimes = 0 : "";
  !defVal.separator ? defVal.separator = '+' : "";
  !defVal.additionSeparator ? defVal.additionSeparator = '|' : "";

  return defVal;
}

function booster(str, repeat, separtor, ...args) {
  str = str + args;
  let arr = Array(repeat);
  arr.fill(str);
  return arr.join(separtor);;
}

module.exports = {
  repeater
};
