import { query } from "../db/index.js";

// Get all events from DB
export async function getAllEvents() {
  const result = await query(`
    SELECT * FROM events ORDER BY date
    `);
  return result.rows;
}

// Getting the users events - not working? Check if fixed? Finds by organiser id
export async function getEventsByOrganiser(organiserId) {
  const result = await query(
    `
        SELECT * FROM events
        WHERE organiser = $1
        ORDER BY postDate DESC;
    `,
    [organiserId]
  );
  return result.rows;
}

// Get events by user id (NO LONGER NECESSARY?)
export async function getEventsById(eventId) {
  const result = await query(
    `
    SELECT * FROM events
    WHERE eventId = $1
    ORDER BY date;`,
    [eventId]
  );
  return result.rows;
}

// ************** Create Event **************************************
export async function createEvent(request) {
  console.log(request);

  const result = await query(
    `
        INSERT INTO events 
        (organiser, eventName, img, locLon, locLat, locName, date, time, eventDescription, mainDescription, email, rating, postDate)
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, CURRENT_TIMESTAMP ) 
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
      request.eventDescription,
      request.mainDescription,
      request.email,
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
