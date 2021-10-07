// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius square, encoding / decoding", () => {

    it("Encoding: output should be string type", () => {
      const expected = "string";
      const actual = typeof polybius("thinkful");
      expect(actual).to.equal(expected);
    });

    it("Decoding: output should be string type", () => {
      const expected = "string";
      const actual = typeof polybius("4432423352125413",false);
      expect(actual).to.equal(expected);
    });
    
    it("Encoding: lower case string", () => {
      const expected = "4432423352125413";
      const actual = polybius("thinkful");
      expect(actual).to.equal(expected);
    });

    it("Encoding: string with space and capital letters", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("Hello World");
      expect(actual).to.equal(expected);
    });

    it("Decoding: message includes combined letter", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413",false);
        expect(actual).to.equal(expected);
    });

    it("Decoding: message includes space", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341",false);
        expect(actual).to.equal(expected);
    });

    it("Encoding: it translates the letters i and j to 42", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413",false);
        expect(actual).to.equal(expected);
    });

});

// When encoding, it translates the letters i and j to 42.

// When decoding, it translates 42 to (i/j).

// It ignores capital letters. (For example, the results of A Message and a message should be the same.)

// It maintains spaces in the message, before and after encoding or decoding.