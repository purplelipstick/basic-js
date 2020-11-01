const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse'
  }
  stuff = {
    lowercaseAlphabet: 'abcdefghijklmnopqrstuvwxyz',
    uppercaseAlphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    genericRegex: /[a-zA-Z]/
  }
  encrypt(message, key) {
    let result = '';
    if (message === undefined || key === undefined) {
      throw new Error
    }
    let uppercasedMessage = message.toUpperCase();
    let uppercasedKey = key.toUpperCase();
    let lettersToEncrypt = uppercasedMessage.match(/[A-Z]/g);
    if (!lettersToEncrypt) {
      return this.type === 'reverse' ? uppercasedMessage.split('').reverse().join('') : uppercasedMessage;
    }
    let enlargedUppercasedKey = '';
    while (enlargedUppercasedKey.length < lettersToEncrypt.length) {
      enlargedUppercasedKey += uppercasedKey;
    }
    let encryptedLetters = lettersToEncrypt.map((letter, index) => {
      let letterIndex = this.stuff.uppercaseAlphabet.indexOf(letter);
      let keyIndex = this.stuff.uppercaseAlphabet.indexOf(enlargedUppercasedKey.charAt(index));
      let indexOfEncryptedLetter = (letterIndex + keyIndex) % 26;
      let encryptedLetter = this.stuff.uppercaseAlphabet.charAt(indexOfEncryptedLetter);
      return encryptedLetter
    })
    let currentIndexOfEncryptedLetter = 0;
    for (i = 0; i < message.length; i ++) {
      if ((this.stuff.genericRegex).test(message.charAt(i))) {
        result += encryptedLetters[currentIndexOfEncryptedLetter];
        currentIndexOfEncryptedLetter++;
      } else {
        result += message.charAt(i);
      }
    }
    return this.type === 'reverse' ? result.split('').reverse().join('') : result;
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error
    }
    let result = '';
    let uppercasedMessage = message.toUpperCase();
    let uppercasedKey = key.toUpperCase();
    let lettersToDecrypt = uppercasedMessage.match(/[A-Z]/g);
    if (!lettersToDecrypt) {
      return this.type === 'reverse' ? uppercasedMessage.split('').reverse().join('') : uppercasedMessage;
    }
    let enlargedUppercasedKey = '';
    while (enlargedUppercasedKey.length < lettersToDecrypt.length) {
      enlargedUppercasedKey += uppercasedKey;
    }
    let decryptedLetters = lettersToDecrypt.map((letter, index) => {
      let letterIndex = this.stuff.uppercaseAlphabet.indexOf(letter);
      let keyIndex = this.stuff.uppercaseAlphabet.indexOf(enlargedUppercasedKey.charAt(index));
      let indexOfDecryptedLetter = (letterIndex - keyIndex + 26) % 26;
      let decryptedLetter = this.stuff.uppercaseAlphabet.charAt(indexOfDecryptedLetter);
      return decryptedLetter
    })
    let currentIndexOfDecryptedLetter = 0;
    for (i = 0; i < message.length; i ++) {
      if ((this.stuff.genericRegex).test(message.charAt(i))) {
        result += decryptedLetters[currentIndexOfDecryptedLetter];
        currentIndexOfDecryptedLetter++;
      } else {
        result += message.charAt(i);
      }
    }
    return this.type === 'reverse' ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;
