const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: '',
  arr: [],
  getLength(arr) {
    // remove line with error and write your code here
    return arr.length;
  },
  addLink(value) {
    // remove line with error and write your code here
    let str = `( ${value} )~~`;
    this.arr.push(str);
    return this;
  },
  removeLink(index) {
    // remove line with error and write your code here
    if (this.arr[index - 1]) {
      delete this.arr[index - 1];
    } else {
      this.arr = [];
      throw new NotImplementedError("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // remove line with error and write your code here
    this.result = this.arr.join('').slice(0, -2);
    this.arr = [];
    return this.result;
  }
};

module.exports = {
  chainMaker
};
