const UserService = require("../userService");

async function dropUsers() {
  await UserService.client.query("DELETE FROM users;");
}

async function prepareUsers() {
  await UserService.client.query(
    `
    INSERT INTO users (
        id, first_name, last_name, created_at, updated_at
        )
    VALUES (1, 'Alice', 'Doe', '2020-03-04T14:12:49.424Z', '2020-03-04T14:12:49.424Z');
    
    INSERT INTO users (
        id, first_name, last_name, created_at, updated_at
    ) VALUES
    (2, 'Bob', 'Smith', '2020-03-04T14:12:49.424Z', '2020-03-04T14:12:49.424Z');
    `
  );
}

describe("user fetching", () => {
  beforeEach(async () => {
    await dropUsers();
    await prepareUsers();
  });

  afterEach(async () => {
    await dropUsers();
  });

  it("should fetch all users in a database", async () => {
    const users = await UserService.selectUsers();

    expect(users).toMatchSnapshot();
  });

  it("should fetch a user with a given id", async () => {
    const user = await UserService.selectUsersById(1);

    expect(user).toMatchSnapshot();
  });

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
});
