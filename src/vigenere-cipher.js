const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(path) {
    this.path = path;
  }

  encrypt(str, key) {
    // remove line with error and write your code here
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new NotImplementedError('Error');
    }
    let arr = str.toLowerCase().split('');
    let result = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0, j = 0; i < arr.length; j++, i++) {
      if (arr[i].match(/^[A-Za-z]+$/)) {
        let alphabet = letters.slice(letters.indexOf(key[j].toLowerCase())) + letters.slice(0, letters.indexOf(key[j].toLowerCase()));
        result += alphabet[letters.indexOf(arr[i])];
        if (j === key.length - 1) j = -1;
      } else {
        result += arr[i];
        j--;
      }
    }
    if (this.path === false) return this.reverse(result);
    else return result.toUpperCase();
  }

  decrypt(str, key) {
    // remove line with error and write your code here
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new NotImplementedError('Error');
    }
    let arr = str.toLowerCase().split('');
    let result = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0, j = 0; i < arr.length; j++, i++) {
      if (arr[i].match(/^[A-Za-z]+$/)) {
        let alphabet = letters.slice(letters.indexOf(key[j].toLowerCase())) + letters.slice(0, letters.indexOf(key[j].toLowerCase()));
        result += letters[alphabet.indexOf(arr[i])];
        if (j === key.length - 1) j = -1;
      } else {
        result += arr[i];
        j--;
      }
    }
    if (this.path === false) return this.reverse(result);
    else return result.toUpperCase();
  }

  reverse(str) {
    return str.split('').reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
