const fibonacci = require("./fibonacci.js");

inputs = [
  { value: 0, expected: 0 },
  { value: 1, expected: 1 },
  { value: 2, expected: 1 },
  { value: 3, expected: 2 },
  { value: 4, expected: 3 },
  { value: 5, expected: 5 },
  { value: 6, expected: 8 },
  { value: 7, expected: "oups" },
  { value: 7, expected: 42 }
];

describe("Test the fibonacci function", () => {
  inputs.forEach(({ value, expected }) => {
    test(`Test that fibonacci(${value}) == ${expected}`, () =>
      expect(fibonacci(value)).toBe(expected));
  });
});
