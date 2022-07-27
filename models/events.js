// Get all events from DB
export async function getAllEvents() {
  const result = await query(`
    SELECT * FROM events
    ORDER BY date`); // add post date to event
  return result.rows;
}

// Getting the users events - not working?
export async function getEventsByUser(username) {
  const result = await query(
    `
        SELECT * FROM events
        WHERE username ILIKE  $1
        ORDER BY postDate DESC;
    `,
    [username]
  );
  return result.rows;
}

// Get events by user id
export async function getAllEventsById(userId) {
  const result = await query(
    `
    SELECT * FROM events
    WHERE post_id = $1
    ORDER BY postDate;`,
    [userId]
  );
  return result.rows;
}

// ************** Create Event **************************************
export async function createEvent(req) {
  console.log(req);

  const result = await query(
    `
        INSERT INTO events 
        (organiser, eventName, img, locLon, locLat, data, time, description, contact, rating)
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, CURRENT_TIMESTAMP ) 
        RETURNING *;`,
    [
      req.body.organiser,
      req.body.eventName,
      req.body.img,
      req.body.locLon,
      req.body.locLat,
      req.body.date,
      req.body.time,
      req.body.description,
      req.body.contact,
      req.body.rating,
    ]
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
}
