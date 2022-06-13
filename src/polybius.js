// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const encoder = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"}
  const decoder = {"11": "a", "21": "b", "31": "c", "41": "d", "51": "e", "12": "f", "22": "g", "32": "h", "42": "(i/j)", "52": "k", "13": "l", "23": "m", "33": "n", "43": "o", "53": "p", "14": "q", "24": "r", "34": "s", "44": "t", "54": "u", "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"}

  // checks if the string to be decoded has an odd number of characters, excluding spaces
  function oddLengthCheck(input) {
    let cleanLength = 0
    for (i = 0; i < input.length; i++) {
      if ((/[0-9]/).test(input[i])) {
        cleanLength++
      }
    }
    return (cleanLength % 2 === 0 ? false : true)
  }

  function polybius(input, encode = true) {
    // your solution code here
    const cleanInput = input.toLowerCase()

    if (!encode) {
      // decodes the input if the 'encode' value passed is false
      // early returns false if there is an odd number of encoded characters
      if (oddLengthCheck(input)) return false

      let decodedResult = ""

      for ( let i = 0; i < cleanInput.length; i++) {
        let decodedValue = ""
        if ((/[0-9]/).test(cleanInput[i]) && (/[0-9]/).test(cleanInput[i + 1])) {
          decodedValue = `${cleanInput[i]}${cleanInput[i + 1]}`
          decodedResult += decoder[decodedValue]
          i++
        } else decodedResult += cleanInput[i]
      }

      return decodedResult

    } else {
      // encodes the input if the 'encode' value passed is true
      let encodedResult = ""

      for (let i = 0; i < cleanInput.length; i++) {
        let encodedValue = ""
        if ((/[a-z]/).test(cleanInput[i])) {
          encodedValue = encoder[cleanInput[i]]
          encodedResult += encodedValue
        } else encodedResult += cleanInput[i]
      }

      return encodedResult
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
