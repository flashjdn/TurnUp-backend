import { query } from "../db/index.js";

//CHECK IF IT WORKS, MIGHT BE FOOKED
export async function getEventTags(eventId) {
  const result = await query(
    `
    SELECT eventTags.eventTagId, tags.tagId, tags.tagName
    FROM eventTags
    INNER JOIN tags
    ON eventTags.tagId = tags.tagId
    WHERE eventTags.eventId = $1
    `,
    [eventId]
  );
  return result.rows;
}
