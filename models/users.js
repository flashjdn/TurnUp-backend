import { query } from "../db/index.js";

//CHECK IF IT WORKS, MIGHT BE FOOKED
export async function getUserById(userId) {
  const result = await query(
    `
    SELECT *
    FROM users
    WHERE userId = $1
    `,
    [userId]
  );
  return result.rows;
}
