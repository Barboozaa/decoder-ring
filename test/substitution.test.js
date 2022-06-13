// Write your tests here!
const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("substitution", () => {
    it("should early return false if the given alphabet is not exactly 26 characters long", () => {
        const input = "quick brown fox"
        const alphabet = "abcdefhijk"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    
    it("should correctly translate the phrase based on the alphabet given to the function", () => {
        const input = "message"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const expected = "y&ii$r&"
        const actual = substitution(input, alphabet)
        expect(actual).to.equal(expected)
    })
    
    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const input = "thinkful"
        const alphabet = "zyxwvutsrqponmlkjgggfedcba"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    
    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const input = "  You  are  an  excellent  spy  "
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const expected = "  elp  xhm  xf  mbymwwmfj  dne  "
        const actual = substitution(input, alphabet)
        expect(actual).to.equal(expected)
    })
    
    it("should ignore capital letters", () => {
        const input = "tHe QuIcK bRoWn FoX"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        const expected = "jd& hnxaf wbvkg zvm"
        const actual = substitution(input, alphabet)
        expect(actual).to.equal(expected)
    })
})