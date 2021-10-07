// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
   it("should return false if shift not present", () => {
    let input = "KorribanLord";
    let shift = undefined;
    const actual = caesar(input, shift, (encode = true));
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is 0", () => {
    let input = "KorribanLord";
    let shift = 0;
    const expected = false;
    const actual = caesar(input, shift, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
    let input = "KorribanLord";
    let shift = 26;
    const expected = false;
    const actual = caesar(input, shift, (encode = true
                                        ));
    expect(actual).to.equal(expected);
  });
  it("should return false if shift less than -25", () => {
    let input = "hey";
    let shift = -30;
    const actual = caesar(input, shift, (encode = true));
    const expected = false;
    expect(actual).to.equal(expected);
  });  
  it("should return wklqnixo when given thinkful", () => {
    let input = "thinkful";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should decode 'bpqa qa i amkzmb umaaiom!' to 'this is a secret message!'", () => {
    let input = "bpqa qa i amkzmb umaaiom";
    let shift = -8;
    let actual = caesar(input, shift, (encode = true));
    let expected = "this is a secret message";
    expect(actual).to.equal(expected);
  });
  it("spaces and characters should be maintained", () => {
    let input = "@#$% *&^&*&^ @#$%$#@";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "@#$% *&^&*&^ @#$%$#@";
    expect(actual).to.equal(expected);
  });
  it("should invert shift (decode) if encode is false", () => {
    let input = "bpqa qa i amkzmb umaaiom";
    let shift = 8;
    let encode = false;
    let actual = caesar(input, shift, encode);
    let expected = "this is a secret message";
    expect(actual).to.equal(expected);
  });  
});

// It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.

// It ignores capital letters. (For example, the results of A Message and a message should be the same.)

// When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

// It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.