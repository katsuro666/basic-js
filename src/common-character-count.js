const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let newStr = s2
  counter = 0
  for (let i = 0; i < s1.length; i++) {
    if (newStr.indexOf(s1[i]) > -1) {
      let letter = newStr[newStr.indexOf(s1[i])]
      counter++
      newStr = newStr.replace(letter, '')
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
