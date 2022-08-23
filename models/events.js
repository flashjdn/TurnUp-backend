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
        ORDER BY date DESC;
    `,
    [organiserId]
  );
  return result.rows;
}

//No longer neccessary?
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

export async function getAttendedEvents(userId) {
  const result = await query(
    `
    SELECT userEvents.userId, events.*
    FROM userEvents
    INNER JOIN events
    ON userEvents.eventId = events.eventId
    WHERE userEvents.userId = $1
    `,
    [userId]
  );
  return result.rows;
}

// ************** Create Event **************************************
export async function createEvent(request) {
  console.log(request);

  const result = await query(
    `
        INSERT INTO events 
        (eventName, 
          eventDescription, 
          mainDescription, 
          date, 
          time, 
          organiser, 
          lat, 
          lng, 
          address, 
          img, 
          email,
          rating
        )
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) 
        RETURNING *;`,
    [
      request.eventName,
      request.eventDescription,
      request.mainDescription,
      request.date,
      request.time,
      request.organiser,
      request.lat,
      request.lng,
      request.address,
      request.img,
      request.email,
      request.rating,
    ]
  );
  return result.rows;
}

export async function createUserEvents(request) {
  console.log(request);

  const result = await query(
    `
        INSERT INTO userEvents 
        (userId,
          eventid
        )
        VALUES 
        ($1, $2) 
        RETURNING *;`,
    [request.userid, request.eventid]
  );
  return result.rows;
}
// ************** Delete Request **************************************
export async function deleteUserEvent(body) {
  console.log("eventid: ", body, "userid:", body.userid);
  const result = await query(
    `
        DELETE FROM userEvents
        WHERE eventId = $1 AND userId = $2;`,
    [body.eventid, body.userid]
  );
  if (result.rowCount === 0) {
    return `No userEvent found with userId: ${body.userid}`;
  }
  return result.command;
}

export async function deleteUserEventsByEventId(eventId) {
  const result = await query(
    `
        DELETE FROM userEvents
        WHERE eventId = $1;`,
    [eventId]
  );
  if (result.rowCount === 0) {
    return `No userEvent found with userId: ${eventId}`;
  }
  return result.command;
}

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
