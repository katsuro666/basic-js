const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
  if (arr.length === 0) {
    return arr
  }
  
  let newArr = []
  let stack = []
  
  if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
    newArr = arr.slice(1, arr.length)
  } else {
    newArr = arr.slice(0, arr.length)
  }
  if (arr[arr.length - 1] === '--double-next') {
    newArr = arr.slice(0, -1)
  }

  for(let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      newArr[i + 1] = 'modified'
      i++
    } else if (newArr[i] === '--discard-prev' && newArr[i - 1] === 'modified') {
      continue
    } else if (newArr[i] === '--discard-prev') {
      stack.pop()
    } else if (newArr[i] === '--double-next') {
      stack.push(newArr[i + 1])
    }
      else if (newArr[i] === '--double-prev' && newArr[i - 1] === 'modified') {
      continue
    } else if (newArr[i] === '--double-prev') {
      let lastNum = stack[stack.length - 1]
      stack.push(lastNum)
    } else {
      stack.push(newArr[i])
    }
  }
  return stack
}

module.exports = {
  transform
};
