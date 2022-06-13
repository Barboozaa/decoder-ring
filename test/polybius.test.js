// Write your tests here!
const { expect } = require("chai")
const { polybius } = require("../src/polybius")

describe("polybius", () => {
    it("should translate letters 'j' and 'i' to 42 when encoding", () => {
        const input = "giant smith iji"
        const expected = "2242113344 3423424432 424242"
        const actual = polybius(input)
        expect(actual).to.equal(expected)
    })
    
    it("should translate 42 to (i/j) when decoding", () => {
        const input = "2242113344 3423424432 424242"
        const encode = false
        const expected = "g(i/j)ant sm(i/j)th (i/j)(i/j)(i/j)"
        const actual = polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    
    it("should ignore capital letters", () => {
        const input = "BIG small"
        const expected = "214222 3423111313"
        const actual = polybius(input)
        expect(actual).to.equal(expected)
    })
    
    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const input = "  all  two  spaces  "
        const expected = "  111313  442543  345311315134  "
        const actual = polybius(input)
        expect(actual).to.equal(expected)
    })
})