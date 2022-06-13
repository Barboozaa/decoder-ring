// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const orderedAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitutionAlphabetUniqueCheck(alphabet) {
    // creates an object to check if the alphabet supplied has all unique letters
    let collectorObj = {}
    for (let i = 0; i < alphabet.length; i++) {
      let currentLetter = alphabet[i]
      if (collectorObj[currentLetter]) {
        return false
      } else collectorObj[currentLetter] = true
    }
    return true
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // return early if there is no substitution alphabet, or it's too short, or the letters are not unique
    if (!alphabet || alphabet.length != 26 || !substitutionAlphabetUniqueCheck(alphabet)) return false

    const cleanInput = input.toLowerCase()

    if (!encode) {
      // decodes the input using the supplied alphabet
      let decodedMessage = ""

      for (let i = 0; i < cleanInput.length; i++) {
        if ((/^[a-z_@./#&+-]*$/).test(cleanInput[i])) {
          let alphabetIndex = alphabet.indexOf(cleanInput[i])
          decodedMessage += orderedAlphabet[alphabetIndex]
        } else decodedMessage += cleanInput[i]
      }

      return decodedMessage

    } else {
      // encodes the input using the supplied alphabet
      let encodedMessage = ""

      for (let i = 0; i < cleanInput.length; i++) {
        if ((/^[a-z_@./#&+-]*$/).test(cleanInput[i])) {
          let alphabetIndex = orderedAlphabet.indexOf(cleanInput[i])
          encodedMessage += alphabet[alphabetIndex]
        } else encodedMessage += cleanInput[i]
      }

      return encodedMessage
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
