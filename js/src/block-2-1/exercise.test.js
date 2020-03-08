const UserService = require("../userService");

describe("user fetching", () => {
  it("should return a full name", () => {
    // 1. Preparation phase
    const user = {
      first_name: "Alice",
      last_name: "Doe"
    };

    // 2. Test phase
    const fullName = UserService.fullName(user).fullName;

    // 3. Expectation phase
    const expected = "Alice Doe";
    expect(fullName).toBe(expected);
  });

  it("should handle empty lastname", () => {
    // 1. Preparation phase
    const user = {
      first_name: "Alice",
      last_name: ""
    };

    const fullName = UserService.fullName(user).fullName;

    // 3. Expectation phase
    const expected = "Alice";
    expect(fullName).toBe(expected);
  });
});
