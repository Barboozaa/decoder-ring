// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift < -25 || shift > 25) return false

    const cleanInput = input.toLowerCase()

    if (!encode) {
      // decodes the input with the shift provided
      let response = ""

      for (i = 0; i < cleanInput.length; i++) {

        if ((/[a-z]/).test(cleanInput[i])) {
          let alphabetIndex = alphabet.indexOf(cleanInput[i])
          let shiftedIndex = alphabetIndex - shift

          if (shiftedIndex > 25) {
            shiftedIndex -= 26
          } else if (shiftedIndex < 0) {
            shiftedIndex += 26
          }
          response += alphabet[shiftedIndex]
          
        } else response += cleanInput[i]
      }
      return response
    } else {
      // encodes the input with the shift provided
      let response = ""

      for (i = 0; i < cleanInput.length; i++) {

        if ((/[a-z]/).test(cleanInput[i])) {
          let alphabetIndex = alphabet.indexOf(cleanInput[i])
          let shiftedIndex = alphabetIndex + shift

          if (shiftedIndex > 25) {
            shiftedIndex -= 26
          } else if (shiftedIndex < 0) {
            shiftedIndex += 26
          }
          response += alphabet[shiftedIndex]
          
        } else response += cleanInput[i]
      }
      return response
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
