import { query } from "../index.js";

async function dropTables() {
  const res = await query(`
        DROP TABLE IF EXISTS events, users;
        `);
  console.log(`${res.command}  all tables deleted from database.`);
}

dropTables();