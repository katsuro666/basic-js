const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let nStr = n.toString()
  if (nStr.includes('0')) {
    nStr = nStr.replace('0', '')
  } 
  else if (nStr.includes('1')) {
    nStr = nStr.replace('1', '')
  } else {
    nStr = nStr.slice(1, nStr.length)
  }
  return +nStr
}

module.exports = {
  deleteDigit
};
