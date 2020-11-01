const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) { 
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();}
  if (!(date instanceof Date) && isNaN(date.getMonth) || (date === undefined) ) throw new Error('THROWN');

  if (((0 <= (date.getMonth()) && ((date.getMonth()) <= 1))) || (date.getMonth() === 11)) {
    //console.log('winter');
    return 'winter';
  } else if ((2 <= date.getMonth()) && (date.getMonth() <= 4)) {
    //console.log('spring');
    return 'spring';
  } else if ((5 <= date.getMonth()) && (date.getMonth() <= 7)) {
    //console.log('summer');
    return 'summer';
  } else if ((8 <= date.getMonth()) && (date.getMonth()<= 10)) {
    //console.log('autumn');
    return 'autumn';
  } 
};
