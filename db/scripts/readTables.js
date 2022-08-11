// import eventsLib from "../libs/eventsLib.js";
import usersLib from "../libs/usersLib.js";
// import commentsLib from "../libs/commentsLib";
import userEventsLib from "../libs/userEventsLib.js";
import eventTagsLib from "../libs/eventTagsLib.js";
import tagsLib from "../libs/tagsLib.js";
import userFriendsLib from "../libs/userFriendsLib.js";
import { dummyEvents } from "../libs/newEventsLib.js";
import { query } from "../index.js";

//*********************** Populate Events Table ***********************//
async function readEventsTable() {

  const res = await query(
    `
        SELECT * FROM events ORDER BY date;
    `
  );
  for (let i = 0; i < res.rows.length; i++) {
    console.log(res.rows[i])
  }
}

await readEventsTable();
