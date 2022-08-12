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
      WHEN userFriends.friend1 = $1 THEN (SELECT userFriends.friend2)
      WHEN userFriends.friend2 = $1 THEN (SELECT userFriends.friend1)
      END) AS friend
    FROM userFriends
    INNER JOIN users ON (CASE 
      WHEN userFriends.friend1 = $1 THEN (userFriends.friend1 = users.userId)
      WHEN userFriends.friend2 = $1 THEN (userFriends.friend2 = users.userId))
    WHERE friend1 = $1 OR friend2 = $1
    `,
    [userId]
  );
  return result.rows;
}

//userFriends.friend1
