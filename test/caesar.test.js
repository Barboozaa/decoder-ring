// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar")

describe("caesar", () => {
    it("should returns false if the shift value is 0, less than -25, greater than 25, or not present", () => {
        const input = "thinkful"
        const shift = 0
        const encode = true
        const actual = caesar(input, shift, encode)
        expect(actual).to.be.false
    })

    it("should ignore capital letters", () => {
        const input = "tHiNkFuL"
        const shift = 6
        const encode = true
        const expected = "znotqlar"
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })

    it("should handle shifts which wrap around from the end or beginning of the alphabet", () => {
        const input = "aardvark"
        const shift = 2
        const encode = false
        const expected = "yypbtypi"
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })

    it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
        const input = "Dr. Jay owes me $42!"
        const shift = -3
        const encode = true
        const expected = "ao. gxv ltbp jb $42!"
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
})