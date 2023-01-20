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
  if (str.length === 0) {
    return str
  }
  
  let counter = 1
  let arr = []
  let result = ''
  let resultArr = []
  
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      arr.push(str[i])
    }  else if (str[i] === str[i-1] ) {
      counter++
    } else if (str[i] !== str[i-1]) {
      result = `${counter}${arr[0]}`
      resultArr.push(result)
      result = ''
      arr.length = 0
      counter = 1
      arr.push(str[i])
    }
  }
  result = `${resultArr.join('')}${counter}${arr[0]}`
  return result.replace(/1/g, '')
}

module.exports = {
  encodeLine
};
