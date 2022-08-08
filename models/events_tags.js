//CHECK IF IT WORKS, MIGHT BE FOOKED
export async function getEventTags(eventId) {
  const result = await query(
    `
    SELECT eventTags.eventId, tags.tagId, tags.tagName,
    FROM eventTags
    INNER JOIN tags
    ON eventTags.tagId = tags.tagId
    WHERE eventTags.eventId = $1
    `,
    [eventId]
  );
  return result.rows;
}
