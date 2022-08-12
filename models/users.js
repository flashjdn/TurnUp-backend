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

export async function getUserByEmail(userEmail) {
  const result = await query(
    `
    SELECT *
    FROM users
    WHERE email = $1
    `,
    [userEmail]
  );
  return result.rows;
}

export async function getEventOrganiserById(userId) {
  const result = await query(
    `
    SELECT userName, email
    FROM users
    WHERE userId = $1
    `,
    [userId]
  );
  return result.rows;
}

export async function getEventAttendees(eventId) {
  const result = await query(
    `
    SELECT userEvents.eventId, users.userName, users.img
    FROM userEvents
    INNER JOIN users
    ON userEvents.userId = users.userId
    WHERE userEvents.eventId = $1
    `,
    [eventId]
  );
  return result.rows;
}

export async function getUserFriends(userId) {
  const result = await query(
    `
    SELECT (CASE 
      WHEN friend1 = $1 THEN (SELECT friend2)
      WHEN friend2 = $1 THEN (SELECT friend1)
      END) AS friend
    FROM userFriends
    WHERE friend1 = $1 OR friend2 = $1
    `,
    [userId]
  );
  return result.rows;
}

//userFriends.friend1
