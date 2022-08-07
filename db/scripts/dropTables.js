import { query } from "../index.js";

async function dropTables() {
  const res = await query(`
        DROP TABLE IF EXISTS events, users, comments, userEvents, eventTags, tags, userFriends;
        `);
  console.log(`${res.command}  all tables deleted from database.`);
}

dropTables();