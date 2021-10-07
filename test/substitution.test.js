// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;
describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let input = "a";
    let alphabet = "abc";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    let input = "thinkful";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "jrufscpw";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let input = "thinkful";
    let alphabet = "xxyqmcgrukswaflnthdjpzibev";

    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should maintain spaces when decoding", () => {
    let expected = "you are an excellent spy";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let input = "elp xhm xf mbymwwmfj dne";
    let encode = false;
    let actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding", () => {
    let input = "you are an excellent spy";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "elp xhm xf mbymwwmfj dne";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("It ignores capital letters", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne"; 
        const actual = substitution(input, alphabet, encode = true);
        expect(actual).to.equal(expected);
    });
});
// It returns false if the given alphabet isn't exactly 26 characters long.

// It correctly translates the given phrase, based on the alphabet given to the function.

// It returns false if there are any duplicate characters in the given alphabet.

// It maintains spaces in the message, before and after encoding or decoding.

// It ignores capital letters. (For example, the results of A Message and a message should be the same.)