import { query } from "../db/index.js";

// Get all events from DB
export async function getAllEvents() {
  const result = await query(`
    SELECT * FROM events ORDER BY eventDate
    `);
  return result.rows;
}

// Getting the users events - not working?
export async function getEventsByUser(userName) {
  const result = await query(
    `
        SELECT * FROM events
        WHERE organiser ILIKE  $1
        ORDER BY postDate DESC;
    `,
    [userName]
  );
  return result.rows;
}

// Get events by user id
export async function getEventsByName(eventName) {
  const result = await query(
    `
    SELECT * FROM events
    WHERE eventName = $1
    ORDER BY date;`,
    [eventName]
  );
  return result.rows;
}

// ************** Create Event **************************************
export async function createEvent(request) {
  console.log(request);

  const result = await query(
    `
        INSERT INTO events 
        (organiser, eventName, img, locLon, locLat, locName, date, time, description, contact, rating, postDate)
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, CURRENT_TIMESTAMP ) 
        RETURNING *;`,
    [
      request.organiser,
      request.eventName,
      request.img,
      request.locLon,
      request.locLat,
      request.locName,
      request.date,
      request.time,
      request.description,
      request.contact,
      request.rating,
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
