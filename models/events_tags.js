import { query } from "../db/index.js";

//CHECK IF IT WORKS, MIGHT BE FOOKED
//UPDATE: works
export async function getEventTags(eventId) {
  const result = await query(
    `
    SELECT eventTags.eventTagId, eventTags.eventId, tags.tagId, tags.tagName
    FROM eventTags
    INNER JOIN tags
    ON eventTags.tagId = tags.tagId
    WHERE eventTags.eventId = $1
    `,
    [eventId]
  );
  return result.rows;
}

export async function createEventTags(request) {
  console.log(request);

  const result = await query(
    `
        INSERT INTO eventTags 
        (tagId,
          eventId
        )
        VALUES 
        ($1, $2) 
        RETURNING *;`,
    [request.tagid, request.eventid]
  );
  return result.rows;
}

export async function deleteTagsByEvent(eventId) {
  const result = await query(
    `
        DELETE FROM eventTags
        WHERE eventId = $1;`,
    [eventId]
  );
  if (result.rowCount === 0) {
    return `No tags found with ID: ${eventId}`;
  }
  return result.command;
}

deleteTagsByEvent;
