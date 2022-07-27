async function dropTables() {
  const res = await query(`
        DROP TABLE IF EXISTS events;
        `);
  console.log(`${res.command}  events table deleted from database.`);
}

dropTables();