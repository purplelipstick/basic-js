const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // preparing
  if (typeof str != 'string') {
    str = String(str) 
  }
  if (options.separator  === undefined) {
    options.separator = '+'
  }
  if (options.additionSeparator  == undefined) {
    options.additionSeparator = '|'
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = '';
  } else if (typeof options.addition != 'string') {
      options.addition = String(options.addition)
  }
  // end preparing
  let res = '';
  for (i = 1; i <= options.repeatTimes; i ++) {
    let additionalPart = '';
    for (k = 1; k <= options.additionRepeatTimes; k ++) {
      if (k == options.additionRepeatTimes) {
        additionalPart += options.addition
      } else {
        additionalPart += options.addition + options.additionSeparator;
      }
    }
    if (i == options.repeatTimes) {
      res += str + additionalPart;
    } else {
      res += str + additionalPart + options.separator;
    }  
  }
  return res
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  
