const fibonacci = require("./fibonacci.js");

describe("Test the fibonacci function", () => {
  test(`Test that fibonacci(0) == 0`, () => {
    expect(fibonacci(0)).toBe(0);
  });

  test(`Test that fibonacci(1) == 1`, () => {
    expect(fibonacci(1)).toBe(1);
  });

  test(`Test that fibonacci(2) == 1`, () => {
    expect(fibonacci(2)).toBe(1);
  });

  test(`Test that fibonacci(3) == 2`, () => {
    expect(fibonacci(3)).toBe(2);
  });

  test(`Test that fibonacci(4) == 3`, () => {
    expect(fibonacci(4)).toBe(3);
  });

  test(`Test that fibonacci(5) == 5`, () => {
    expect(fibonacci(5)).toBe(5);
  });
});
