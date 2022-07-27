/*// Get all events from DB
export async function getAllEvents() {
  const result = await query(`
    SELECT * FROM events
    ORDER BY postDate`); // add post date to event
  return result.rows;
};

// Getting the users events - not working?
export async function getEventsByUser(username) {
  const result = await query(`
        SELECT * FROM events
        WHERE username ILIKE  $1
        ORDER BY post_date DESC;
    `,
    [username]);
  return result.rows;
};

// Get events by user id
export async function getAllEventsById(userId) {
  const result = await query(`
    SELECT * FROM comments
    WHERE post_id = $1
    ORDER BY post_date;`,
    [userId]
  );
  return result.rows;
}

// ************** Create Event **************************************
export async function createEvent(req) {
  const [eventId, username, userId, content] = [
    Number(req.body.eventId),
    req.body.username,
    Number(req.body.userId),
    req.body.content,
  ];
  console.log(eventId, username, userId, content);

  const result = await query(
    `
        INSERT INTO events 
        (eventId, username, userId, content, post_date, upvote, pinned)
        VALUES 
        ($1, $2, $3, $4, CURRENT_TIMESTAMP, 0, FALSE) 
        RETURNING *;`,
    [eventId, username, userId, content]
  );
  return result.rows;
}

// ************** Delete Request **************************************
export async function deleteEvent(eventId) {
  const result = await query(
    `
        DELETE FROM events
        WHERE eventId = $1;`,
    [eventId]
  );
  if (result.rowCount === 0) {
    return `No post found with ID: ${eventId}`;
  }
  return result.command;
};*/
