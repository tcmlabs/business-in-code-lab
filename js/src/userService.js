const { Client } = require("pg");

const client = new Client({
  database: "postgres",
  user: "postgres",
  password: "postgrespassword"
});

client.connect();

function fullName(user) {
  // This function is pure
  return {
    ...user,
    fullName: (user.first_name + " " + user.last_name).trim()
  };
}

async function selectUsers() {
  // This function is NOT pure
  const res = await client.query("SELECT * FROM users");

  return res.rows.map(fullName);
}

async function selectUsersById(userId) {
  // This function is NOT pure
  const res = await client.query({
    text: `SELECT * FROM users WHERE id = $1`,
    values: [userId]
  });

  return res.rows.map(fullName)[0];
}

module.exports = { selectUsers, selectUsersById, client, fullName };
